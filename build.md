1)download zip or clone repository by using git clone (the repository is public)

2)Now that we have the project, open it with file explorer.

3) go in the backend folder, then in db folder.
![image](https://github.com/mohamedr54/project_node/assets/152565099/d9f02a08-3f78-432b-a31d-50a0d15a53c4)

4) Copy the path to the db folder.
   ![image](https://github.com/mohamedr54/project_node/assets/152565099/8b7735b6-3bc7-4363-b35d-e3f05299ef8f)


6) Go back to the backend folder and open .env file
7) ![image](https://github.com/mohamedr54/project_node/assets/152565099/b40de3a6-d422-4274-9ea8-71bbe4ce8d88)

8) change the value of DBPATH : it must be the path access to the db folder. Dont forget to tranform backslashes in slashes ('\' in '/') ,
   to add a /after db in the path
   and to remove the C:\ at the beginning of the Path.
   ![image](https://github.com/mohamedr54/project_node/assets/152565099/31b25d3b-84bf-4882-aece-a5686387f46a)

10) The line should resemble this : DBPATH="/Users/.../Desktop/Final_project/backend/db/"
11) save and close .env file
    
13) still in backend directory, open app.ts (or any other .ts file, we just need the terminal)
    ![image](https://github.com/mohamedr54/project_node/assets/152565099/7fddf9ae-1da5-47f6-b33c-ab5277deecb2)

    
15) in the terminal, you should be in the main directory of the project
16) ![image](https://github.com/mohamedr54/project_node/assets/152565099/6826c1db-2774-4b09-bb40-65486e4ef974)

    
17) use cd backend to be in the backend directory
18) type npm install
19) ![image](https://github.com/mohamedr54/project_node/assets/152565099/e85ff26b-7db8-4c51-a651-5fba82e728b0)

20) use cd .. to go back in the main directory, then use cd frontend and type npm install again
   ![image](https://github.com/mohamedr54/project_node/assets/152565099/a1c53af0-8a82-44ff-a408-0f26a7022a2e)

then type npm install bootstrap (we need it)
![image](https://github.com/mohamedr54/project_node/assets/152565099/470a8a79-f923-4ccf-b427-4246c402f893)


24) Now we need to launch the backend and frontend :
25) to launch the backend, type cd.. then cd backend
26) type npx tsc to compile all files
27) type node app.js to launch it
    ![image](https://github.com/mohamedr54/project_node/assets/152565099/0f237a73-69a3-4045-a3c4-7c0c632bf767)


29) We now need to launch the "front part"
    
31)open a NEW TERMINAL,  then use cd frontend
32) then type npm run ng serve
    ![image](https://github.com/mohamedr54/project_node/assets/152565099/1aec61ab-ed24-49c4-89a0-d0ebf7aa6409)

34) use the provided URL in your browser to see the website
    ![image](https://github.com/mohamedr54/project_node/assets/152565099/1a492c7c-d40b-48a0-9e39-716bcc60d562)

