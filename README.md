

##### Iniciar Project Ionic
`docker-compose run ionic ionic init`

##### Up Ionic Server
`docker-compose up -d`

##### Generar Archivo apk para Android
`ionic cordova platform add android`

en nuestro Docker

`dc ionic cordova platform add android`

##### Generar Archivo apk para IOS (mandatory in mac)
`dc ionic cordova platform add ios`


##### Generar Resources (iconos app,...)
`dc ionic cordova resources`

`dc ionic cordova resources android --force`


##### Arrancar con Ionic Lab (ver en la misma pantalla android e ios)
`ionic serve --lab`


##### Arrancar servidor Angular
`dc ng serve -o`