# Sheltero
Job finding App designed for everyone. Visit the website at shelteroinf.herokuapp.com. The app can be run under the folder **Project/project_app and found** at : https://github.com/SaintTan/Sheltero

## To deploy app
Since the root of the branch is not the app, please use the command:
```git subtree push --prefix Project/project_app heroku master```
to deploy the app on heroku.


## Features
**Sign up**

We have implemented a sign up function which would allow candidates to sign up onto our website; the data is currently stored in the models folder, and is therefore not connected to a cloud database. However, the user is still allowed to signup. Candidates could pick whether they are an employee or employer. To ensure protection of user's personal information, the user's password is encrypted before saving into the 'database'. 

To access the signup function, simply click on the url link below, or visit the homepage and click on the *signup button*

URL Link: http://shelteroinf.herokuapp.com/user/signup

**Sign in**

The sign in feature has also been implemented and the identification of individuals is dealt with passport.js. It looks for the individual in the models folder and check to see if they are an existing user, and have the correct password. passport.js is responsible for rerouting users to the right direction, ie. if they are not the user signed in, they are redirected to a different page

To access the signin function, simply click on the url link below, or visit the homepage and click on the *signin button*

URL Link: http://shelteroinf.herokuapp.com/user/login

**Job Searching**

A field for users to search for jobs is implemented to allow users to search for jobs. It displays the title, salary, details of the job, company who posted the job as well as their contact details. Users could search jobs any of values. This feature can also be access right after the user login.

There are three ways of job searching:

- *By keyword* -
This function enables users to find jobs with a few known keywords. It will return the job information of all jobs having that keywords in its information (all attributes in the database).
    This function could be accessed by type in "/keyword" after the url link below.

    URL Link: http://shelteroinf.herokuapp.com/job-search/byKeyword/your_keyword

- *By tag* - 
    To limit the result from the byKeyword function, users could use byTag function to search job by their tags. This allows them to find jobs in a specific category. Tags are assigned by the employers.
    This function could be accessed by type in "/jobTag" after the url link below.

    URL Link: http://shelteroinf.herokuapp.com/job-search/byTag/your_tag

- *By area* - 
    In order to let the users to choose jobs that are close to them, a byArea function could be used to return jobs that are in a particular area (suburb). This function could be accessed by type in "/jobArea" after the url link below.

    URL Link: http://shelteroinf.herokuapp.com/job-search/byArea/your_area

Additionally you can access the function after signing in (and sign up if you haven't done so).
