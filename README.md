# E-Comm-In-The-Back

## Project Description
![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge")
![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg "License Badge")

The back-end of an e-commerce application that uses Express.js APIs, synced with Sequelize models to interact with a MySQL databse.

## Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Credits](#credits)
- [Licenses](#licenses)
- [Contributing](#contributing)
- [Contact Information](#contact-information)

## Installation Instructions

Clone the "e-comm-in-the-back" repository to your local directory. If not done already, ensure Node.js and MySQL are installed and configured on your workstation. At the 
command-line at the root of the directory, type **npm_install_** to install all pre-determined packages (express, sequelize, dotenv, mysql2 & nodemon).

Create a .env file at the root of the directory, and inside add the following lines of code:
- DB_NAME='ecommerce_db'
- DB_USER='< your_mySQL_username >'
- DB_PW='< your_mySQL_password >'

Sign into your mySQL and type the following command:
- source db/schema.sql;
- quit or exit

At the command-line type **npm _run seed_** to seed the database.

Congrats! All the required packages have been installed and you're ready to use the app. 

## Usage

See instructional video:

**Screenshot of Insomnia - API Route Testing**

![Screenshot](https://user-images.githubusercontent.com/83710803/129788722-19877497-b12d-48bb-bd48-05e582bcff3d.png)


## Credits

Project idea starter-code along with very clear/step-by-step instructions provided by Carleton University. All code required to complete the missing sections provided by
Adam Girard-McFadden

## Licenses

For more information on the Licenses used, click on the links below.

[License: MIT](https://choosealicense.com/licenses/mit/)

[License: BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause)

Copyright © 2021 [ADAM GIRARD-MCFADDEN](https://github.com/adamgmcfadden)

## Contributing

Other developers may add and update any code at their leisure. For more info, contact me using email address provided below.

## Testing

To test API Routes as shown in the instructional video and screenshot, complete the following steps:

- Download Insomnia by Kong (one example of an app to test and build APIs)
- Click on the "Create" button and choose the "Request Collection" option (give your collection a name)
- Click on the "+" symbol on the left hand side and click on "New Request" (give your new request a name)
- Enter the localhost url at the top (ex.: https://localhost:3001/api/products)
- Choose the type of Route you'd like to test by clicking the drop down list (ex.: GET, POST, PUT, DELETE)
- Start your server with "npm start" (for node) or "npm run watch" (for nodemon) 
- To find, delete or update one item, remember to enter the unique identifier in the url (in this case the item's id)
- When testing a POST route or a PUT route, remember to change the format to JSON and write the new object using the correct attributes and syntax

## Contact Information

Contact me via my github profile or email address (links below)

- Github Username: [adamgmcfadden](https://github.com/adamgmcfadden)
- Email address: adam_m_20@hotmail.com


