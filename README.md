# DoAnWebBookingKhachSan
Prerequisites Information: 
    Project Technology: 
        Node version: 14.17 
            -> Learn how to use multiple version right here: 
                https://www.youtube.com/watch?v=ccjKHLyo4lM&t=6s&pp=ygUYaG9pZGFuaXQgZHVuZyBuaGlldSBub2Rl

        Map API: 
            Mapbox: https://docs.mapbox.com/help/getting-started/ 

        Database: Sqlite3 (development), Mysql (production)
        Image Hosting Service: cloudinary
        Css: Sass
        Server: Express 
        Client: ReactJS  

    Meaning & Usage of files and folders: 
    **Folders: 
        *server/src: (Nghia/Nguyen)
            + config: 
                -> contains config infos of: 
                    + sequelize 

            + models: 
                contains sequelize's models
            + migrations:
                contains sequelize's migrations (Database version control)
            + seeders: 
                contains sample data for database

            + route:
                -> contains the API url to different services of the backend (The step before 'Controller')
            + controller: 
                -> contains controller state processing code (The 'Controller' in MVC)
            + services: 
                -> contains business logic code (The 'Model' is MVC)

            -> How the API flow gonna works: 
                1. React Client call to route 
                2. route call controller 
                3. controller calls 'model'(the data part) and 'service'(the logic part) -> get the result back 
                4. controller return the result back to the React Client 

                <insert a Sequence Diagram for clearer>  

        *client: (Lap/Nghia/Nguyen)
            + src:
                + api (Nghia/Nguyen)
                + components (Lap/Nghia/Nguyen)
                + style (Lap)
            + public: (Lap)
                contains resources files (ex: images, sound files, ...)


    **Files: 
        There are 2 config files: 
        + config.json
            -> contains database connection infos: 
                "username": "root",
                "password": "doanweb",
                "database": "datphongkhachsan",
                "port": "3307",
                "host": "localhost",
                "dialect": "mysql"

        + .env  
            -> contains 
                + server listening port 
                + use what database mode: 
                    + 'test'
                    + 'development'
                    + 'production'

        -> The file connectDB.js will use both of the configs in these 2 files to setup the database for the project 

        server/models/index.js: 
            -> Don't touch it for now :v


Development Rules: 
    naming structure: 
        + variable/method -> camelCase  
            vd: helloWorld, getCrud()
        + constant -> ALL_CAPS 
            vd: ARRAY_SIZE

    Resource files (vd: images, sounds, ...) should be in 'public' folder 