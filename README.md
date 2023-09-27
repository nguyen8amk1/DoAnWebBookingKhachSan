# DoAnWebBookingKhachSan
Prerequisites Information: 
    Project Technology: 
        Node version: 14.17 
            -> Learn how to use multiple version right here: 
                https://www.youtube.com/watch?v=ccjKHLyo4lM&t=6s&pp=ygUYaG9pZGFuaXQgZHVuZyBuaGlldSBub2Rl

        Database: Mysql 

    Meaning & Usage of files and folders: 
    **Folders: 
        *server/src:
            + config: 
                -> contains config infos of: 
                    + sequelize 

            + models: 
            + migrations:
            + seeders: 

            + route:
                -> contains the API url to different services of the backend (The step before 'Controller')
            + controller: 
                -> contains controller state processing code (The 'Controller' in MVC)
            + services: 
                -> contains business logic code (The 'Model' is MVC)

            -> How the API flow gonna works: 
                1. User call to route 
                2. route call controller 
                3. controller calls 'model'(the data part) and 'service'(the logic part) -> get the result back 
                4. controller return the result back to the view  

                <insert a Sequence Diagram for clearer>  

        *client: 
            + src:
            + public: 
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
            -> This 

        + .env  
            -> contains 
                + server listening port 
                + use what database mode: 
                    + 'test'
                    + 'development'
                    + 'production'

        -> The file connectDB.js will use both of the configs in these 2 files to setup the database for the project 

Development Rules: 
    naming structure: 
        + variable/method -> camelCase  
            vd: helloWorld, getCrud()
        + constant -> ALL_CAPS 
            vd: ARRAY_SIZE

    Resource files (vd: images, sounds, ...) should be in 'public' folder 