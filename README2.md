[![CircleCI](https://circleci.com/gh/jvt/Brainy-Kids.svg?style=svg)](https://circleci.com/gh/jvt/Brainy-Kids)

# 8108 - Brainy Kids Administration panel and Analytics Platform v1.0.0

This is the codebase for the Brainy Kids backend and administration panel. This repository also includes the code required for ingesting analytics from the various applications. Keep in mind that this application has to be running only on a single computer/server. All other teachers, administrators, etc will access it through the web.

## Release Notes November 30th: v1.0.0
### New Features
1. Various REST API endpoints is available now to access and manipulate information for student, focus items, program, analytics. 
2. You can access information for all students, focus items, programs, and analytics in addition to create, retrieve, update, and delete information for a single student, focus item, program, and analytic. 
3. Our application provides secured access to all information. Authentication of users is done through the use of Json Web Token (JWT)
4. If you are a teacher, there is a web interface designed specifically for you. It facilitates you in managing your students' accounts and monitoring their learning progresses.
5. Concerned about FERPA regulations for sensitive information regarding your students? Our application is not storing any of the identifiable information at any time.
6. ??? I need a description about the CSV upload here ???
7. In addition, anlytics to assess learning performances of each and all of your students is supported, and you can easily access these analytics in your web portal.

### Bug Fixes  
[None]

### Known Bugs
[None]

## Install Guide Novermbre 30th: v1.0.0 (For REST API)
### Pre-requisites
1. You must have Node.js installed before proceeding. Run `node --version` in your terminal and expect to see a version number printed out
2. You must have npm installed. Run `npm --version` in your terminal and expect to see a version number printed out
3. You must have the latest version of MongoDB set up either locally or point it to a remote server (see "Installation")

### Download
https://github.com/jvt/Brainy-Kids

### Dependencies
1. Launch a new terminal and navigate to the root directory of this repository (you should see `package.json` when you run `ls` in the terminal)
2. Run `npm install` to install all dependencies

### Build
No build necessary for this application.

### Installation
1. Navigate to the root directory (where `package.json` locates)
2. Duplicate `.env.example` and rename it to `.env`
3. Open the `.env` file and add a JWT_SECRET
4. Also set `MONGODB_URI` to either point to your local machine or wherever your MongoDB is.

### Running Application
1. Make sure your instance of MongoDB is running
2. Run `npm start` to start the application ??? shouldn't `npm start` be the convension for release?
3. Open your browser and go to this URL: `localhost:3000`
4. Enjoy our application!

### Troubleshooting
1. The program will exit on startup if it is unable to find an instance of MongoDB running at the set URI. Be sure that the instance of MongoDB is running before you start the program.
2. If the program crashes on startup with error messages mentioning the word "dependicies" run `npm install` in the root directory of the project again.

## Install Guide Novermber 30th: v1.0.0 (For Teacher Portal) ?? Do we need to write anything about this one?


## Developer notes

### Viewing the Redux store
1.  From any page on the website, press `CTRL + h` (Configured in `/frontend/components/DevTools.js`) to open the Redux DevTools panel
2.  From here, you can view the global state of the application.
3.  To move the window around, press `CTRL + w`

### Running API Tests
1.  From a terminal window, run `npm run test` or `npm test` (both do the same thing)
2.  Let the tests run, it will generate a coverage window in the terminal once all the tests have completed running

### Continuous Integration

CI is provided by CircleCI and runs on every pull request to ensure tests pass. Merging is disabled until tests pass.