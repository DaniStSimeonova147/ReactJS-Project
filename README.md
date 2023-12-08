# ReactJS-Project
SoftUni Emax 09.12.23

## Overview
Design and implement a web application (Single Page Application) using React.js.
Topic: Adopt me.
Web application for sharing animals for adoption.

![image](https://github.com/DaniStSimeonova147/ReactJS-Project/assets/48598905/e061c474-45ab-4ceb-a5dd-5486b7925f9d)

## Public part (Accessible without authentication)
This part of the application is designed for non-registered users. These users have access to the following:
Home Page -> You can find basic information.
Wait List Page -> Catalog which contains all uploaded animals for adoption with the option to select the page for detailed information.
Pet details -> A page offering more detailed information about each pet and section with comments.
Login/Register -> This page appears when you click on Header's sign-in icon. If you don't have profile, you can switch to sign-up form..

## Private part (Available for Registered Users)
Logged in users have access to the following:
Create pet -> You can create an animal that is homeless, it is added to the waiting list.
Add coment -> You can add a comment to any animal on the waiting list
Logged in user (author) have access tot the following:
Edit Page -> You can change the information about the animal you created
Delete фунцтион -> You can delete the animal you added.

## Technical Details
Client (adopt-me):
If you want to run the project, you have package.json file in the main client folder.

npm install

npm start

Servwe:
The server used in the project is Softuni practice server.

It was modified, so the initial users have admin role and the initial collecitons are changed. If you want to start the server, read its documentation.
