# DoAnWebBookingKhachSan
Prerequisites Information: 
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
        + 

Development Rules: 
    ....