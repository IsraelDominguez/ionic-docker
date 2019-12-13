

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
    
    Añadir en los providers el plugin: InAppBrowser

    Usarlo en nuestros modulos o componentes