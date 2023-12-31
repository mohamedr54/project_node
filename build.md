1)
download zip or clone repository by using git clone (the repository is public)

2)Now that we have the project, open it with file explorer.

3) go in the backend folder, then in db folder.


4) Copy the path to the db folder.
   ![image](https://github.com/mohamedr54/project_node/assets/152565099/d9f02a08-3f78-432b-a31d-50a0d15a53c4)

6) Go back to the backend folder and open .env file
7) change the value of DBPATH : it must be the path access to the db folder (dont forget to tranform backslashes in slashes ('\' in '/') , to add a /after db in the path and to remove the C:// at the beginning of the Path.
8) The line should resemble this : DBPATH="/Users/linjo/Desktop/Final_project/backend/db/"
9) save and close .env file
10) go into backend directory and open app.ts (or any other .ts file, we just need the terminal)
11) in the terminal, use cd backend to be in the backend directory
12) type npm install
13) use cd .. to go back in the main directory, then use cd frontend and type npm install again, then type npm install bootstrap (we need it)

14) Now we need to launch the backend and frontend :
15) to launch the backend, type cd backend
16) type npx tsc to compile all files
17) type node app.js to launch it

18) We now need to launch the "front part"
19) use cd.. to come back to the main folder, then cd frontend
20) then type npm run ng serve
21) use the provided URL in your browser to see the website
