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