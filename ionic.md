

##### Create New 
`ionic g page path` 

ionic g page pages/cards --spec=false

--dry-run : Review before execute

En nuestro docker

`dc ionic g page pages/home` 

ionic g module name-module

ionic g components components/name-component


##### Slots
para posicionar al inicio slot="start"


##### Mode
Todo componente se puede forzar para que se vea de un modo ios o material design y así se ve igual en ambos dispositvos
 mode="ios|md"
 
##### Declarar Plugin Nativo

1. Instalar
 `npm i @ionic-native/in-app-browser`
 
2. Añadir en el app.module

    `import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';`
    
    `dc run ionic cordova plugin add cordova-plugin-x-socialsharing`
    `dc run npm install @ionic-native/social-sharing`
   
    Los plugins se añaden a los providers en app.module.ts: InAppBrowser

    Usarlo en nuestros modulos o componentes
    
##### Storage

`dc run ionic cordova plugin add cordova-sqlite-storage`

`dc npm install --save @ionic/storage`

Es un modulo, los módulos se apader a los imports en app.module.ts


    