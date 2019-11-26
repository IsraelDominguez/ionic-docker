

##### Create New Angular Components
`ng g c pages/about` 

--dry-run : Review before execute

En nuestro docker

`dc angular ng g c pages/about` 

##### Create New Router Module
`ng g m appRouting --flat


<router-outlet></router-outlet>`

##### Genera archivo de rutas en el modulo con archivo de routes
`dc angular ng g m pages/posts --routing`

##### Lazy Load
 loadChildren: './pages/posts/posts.module#PostsModule'
 
##### Data Service - sin test
`ng g s service/data --spec=false`

Pipe Async `| async` to better ajax call performance
RXjs manejo de Observables