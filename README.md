# Menu-Master-API

** Work in Progress **

This is the backend for a meal planning and grocery shopping application.

### Uses:
* Node.js
* Express
* MySQL


The base API was created using my custom Yeoman generator (https://github.com/a951racer/generator-express-rest-api-orm) and the config file one directory up.

### Administrative Functionality:
* Define list of possible meals (Breakfast, Morning Snack, Lunch, Dinner, etc.)
* Define ingredients list
* Define recipes (groups of ingredients)

### User Functionality:
* View menu for a selected day
* View menu for next 7 days
* Define meal "slots" for a day
* Specify recipes or dishes for each meal "slot" in a day
* Generate a list of ingredients (shopping list) for a set of days

As a RESTful API, it can be exercised with REST tools such as Postman.

