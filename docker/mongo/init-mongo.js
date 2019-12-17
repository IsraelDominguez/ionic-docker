db.createUser(
    {
        user: "ionic",
        pwd: "ionic",
        roles: [
            {
                role: "readWrite",
                db: "ionic"
            }
        ]
    }
)

//use fotosgram
//db.getUser("ionic")
//db.grantRolesToUser("ionic", [{role:"readWrite", db:"fotosgram"}])

// db.createUser(
//     {
//         user: "ionic",
//         pwd: "ionic",
//         roles: [
//             {
//                 role: "readWrite",
//                 db: "fotosgram"
//             }
//         ]
//     }
// )
//