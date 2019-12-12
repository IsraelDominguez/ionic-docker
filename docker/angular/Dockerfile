FROM node:latest

ENV DEBIAN_FRONTEND=noninteractive \
    TERM=xterm

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
  chmod -R 777 /usr/local/bin && chmod -R 777 /usr/local/lib
  #&& chown ${USER}:${USER} ${ANDROID_HOME} -R

# -----------------------------------------------------------------------------
# Switch the user of this image, because previous commands need to be run as root
# -----------------------------------------------------------------------------
USER ${USER}

# Install Global dependencies
##########################################
RUN \
    npm install -g @angular/cli && \
    npm cache clean --force


# -----------------------------------------------------------------------------
# WORKDIR is the generic /app folder. All volume mounts of the actual project
# code need to be put into /app.
# -----------------------------------------------------------------------------
WORKDIR /app

EXPOSE 4200

# -----------------------------------------------------------------------------
# Run NG
# -----------------------------------------------------------------------------
#CMD ["ng", "serve", "-o"]