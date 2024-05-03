# mern-auth
MERN Authentication Application

# SETUP INSTRUCTIONS 

## Main folder Setup 

### Environment variables 

First, create the environment variables file .env in the main folder. The .env file contains the following environment variables:

MONGODB_URI = your MongoDB URL 
JWT_SECRET = any secret key - must be secured

### Setup MongoDB
1. Setting up MongoDB involves a few steps:
⋅⋅*Visit MongoDB Atlas Website
Go to the MongoDB Atlas website: https://www.mongodb.com/cloud/atlas.
⋅⋅*Create an Account
⋅⋅*Log in to your MongoDB Atlas account.
⋅⋅*Create a New Cluster
⋅⋅*Choose a Cloud Provider and Region
⋅⋅*Configure Cluster Settings
⋅⋅*Create Cluster
⋅⋅*Wait for Cluster to Deploy
⋅⋅*Create Database User
⋅⋅*Set Up IP Whitelist
⋅⋅*Connect to Cluster
⋅⋅*Configure Your Application
⋅⋅*Test the Connection

2. Create a new database and configure the .env file with the MongoDB connection URL.

Steps to run server Open the project in any editor of choice. 
Run *npm i* or *npm install* to install the packages. 
Run *npm run dev* to start the server. 

If configured correctly, you should see a message indicating that the server is "Server listening on port 3000 and Connected to MongoDB".

---

## Client Side Setup 

### Environment variables 

First, create the environment variables file *.env* in the client folder. The *.env* file contains the following environment variables:

VITE_FIREBASE_API_KEY = = your firebase apikey

Steps to run client Navigate into the client directory cd client. Run *npm i* or *npm install* to install the packages. Run *npm run dev* to run the app on http://localhost:5173. 

Open http://localhost:5173 to view it in your browser.



