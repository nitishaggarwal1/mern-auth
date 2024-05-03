# mern-auth
MERN Authentication Application

# H1
SETUP INSTRUCTIONS 

## H2
Main folder Setup 

### H3
Environment variables 

First, create the environment variables file .env in the main folder. The .env file contains the following environment variables:

MONGODB_URI = your MongoDB URL 
JWT_SECRET = any secret key - must be secured

Steps to run server Open the project in any editor of choice. 
Run *npm i* or *npm install* to install the packages. 
Run *npm run dev* to start the server. 

If configured correctly, you should see a message indicating that the server is "Server listening on port 3000 and Connected to MongoDB".

---

## H2
Client Side Setup 

### H3
Environment variables 

First, create the environment variables file *.env* in the client folder. The *.env* file contains the following environment variables:

VITE_FIREBASE_API_KEY = = your firebase apikey

Steps to run client Navigate into the client directory cd client. Run *npm i* or *npm install* to install the packages. Run *npm run dev* to run the app on http://localhost:5173. 

Open http://localhost:5173 to view it in your browser.