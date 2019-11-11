FROM ubuntu:19.04

MAINTAINER Maik Hummel <m@ikhummel.com>

ENV DEBIAN_FRONTEND=noninteractive \
    TERM=xterm

# Install JAVA 8
#####################
RUN buildDeps='software-properties-common'; \
    set -x && \
    apt-get update && apt-get install -y $buildDeps --no-install-recommends && \

    apt-get install -y openjdk-8-jdk && \

    # clean up
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    apt-get purge -y --auto-remove $buildDeps && \
    apt-get autoremove -y && apt-get clean

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64

# Install ANDROID SDK
#####################
ENV ANDROID_SDK_URL="https://dl.google.com/android/repository/tools_r25.2.5-linux.zip" \
    ANDROID_BUILD_TOOLS_VERSION=27.0.0 \
    ANDROID_APIS="android-10,android-15,android-16,android-17,android-18,android-19,android-20,android-21,android-22,android-23,android-24,android-25,android-26" \
    ANT_HOME="/usr/share/ant" \
    MAVEN_HOME="/usr/share/maven" \
    GRADLE_HOME="/usr/share/gradle" \
    ANDROID_HOME="/opt/android"

ENV PATH $PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/build-tools/$ANDROID_BUILD_TOOLS_VERSION:$ANT_HOME/bin:$MAVEN_HOME/bin:$GRADLE_HOME/bin

WORKDIR /opt

RUN dpkg --add-architecture i386 && \
    apt-get -qq update && \
    apt-get -qq install -y wget curl maven ant gradle libncurses5:i386 libstdc++6:i386 zlib1g:i386 && \

    # Installs Android SDK
    mkdir android && cd android && \
    wget -O tools.zip ${ANDROID_SDK_URL} && \
    unzip tools.zip && rm tools.zip && \
    echo y | android update sdk -a -u -t platform-tools,${ANDROID_APIS},build-tools-${ANDROID_BUILD_TOOLS_VERSION} && \
    chmod a+x -R $ANDROID_HOME && \
    chown -R root:root $ANDROID_HOME && \

    # Clean up
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    apt-get autoremove -y && \
    apt-get clean

# Install NODE and NPM
######################
ENV NODEJS_VERSION=12.13.0 \
    PATH=$PATH:/opt/node/bin

WORKDIR "/opt/node"

RUN apt update && apt install -y curl git ca-certificates bzip2 openssh-client --no-install-recommends && \
    curl -sL https://nodejs.org/dist/v${NODEJS_VERSION}/node-v${NODEJS_VERSION}-linux-x64.tar.gz | tar xz --strip-components=1 && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get clean


# -----------------------------------------------------------------------------
# Create a non-root docker user to run this container
# -----------------------------------------------------------------------------

ENV USER ionic
RUN \
  # create user with appropriate rights, groups and permissions
  useradd --user-group --create-home --shell /bin/false ${USER} && \
  echo "${USER}:${USER}" | chpasswd && \
  adduser ${USER} sudo && \
  adduser ${USER} root && \
  chmod 770 / && \
  usermod -a -G root ${USER} && \

  # create the file and set permissions now with root user
  mkdir /app && chown ${USER}:${USER} /app && chmod 777 /app && \

  # create the file and set permissions now with root user
  touch /image.config && chown ${USER}:${USER} /image.config && chmod 777 /image.config && \

  # this is necessary for ionic commands to run
  mkdir /home/${USER}/.ionic && chown ${USER}:${USER} /home/${USER}/.ionic && chmod 777 /home/${USER}/.ionic && \

  # this is necessary to install global npm modules
  chmod -R 777 /usr/local/bin && chmod -R 777 /usr/local/lib && chmod -R 777 /opt/node/lib/node_modules && chmod -R 777 /opt/node/bin
  #&& chown ${USER}:${USER} ${ANDROID_HOME} -R



# Install CORDOVA
#####################
ENV CORDOVA_VERSION 9.0.0

WORKDIR "/tmp"

RUN npm i -g --unsafe-perm cordova@${CORDOVA_VERSION}

# Install IONIC
#####################
ENV IONIC_VERSION 5.4.5

RUN \
    npm i -g ionic && \
    rm -rf /var/lib/apt/lists/* && apt-get clean

# -----------------------------------------------------------------------------
# Copy start.sh and set permissions
# -----------------------------------------------------------------------------
COPY start.sh /start.sh
RUN chown ${USER}:${USER} /start.sh && chmod 777 /start.sh


# -----------------------------------------------------------------------------
# Switch the user of this image, because previous commands need to be run as root
# -----------------------------------------------------------------------------
USER ${USER}

# Install Global dependencies
##########################################
RUN \
    npm install -g typescript && \
    npm install -g gulp && \
    npm install -g @angular/cli && \
    npm cache clean --force


# -----------------------------------------------------------------------------
# WORKDIR is the generic /app folder. All volume mounts of the actual project
# code need to be put into /app.
# -----------------------------------------------------------------------------
WORKDIR /app


# -----------------------------------------------------------------------------
# The script start.sh installs package.json and puts a watch on it. This makes
# sure that the project has allways the latest dependencies installed.
# -----------------------------------------------------------------------------
ENTRYPOINT ["/start.sh"]


# -----------------------------------------------------------------------------
# After /start.sh the bash is called.
# -----------------------------------------------------------------------------
CMD ["ionic", "serve", "-b", "-p", "8100", "--address", "0.0.0.0"]