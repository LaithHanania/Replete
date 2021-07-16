
# Replete

Web application that allows users to measure and track their events and habits according to criteria they create. By adding events and judging them by their criteria, the users can track their improvements and also see trends and data visualizations on the web app.

# Integrations

- Google OAuth for user sign-in and sign-up
- Google calendar to extract user calendar events

# Frontend

Created using Create-React-App (CRA), so this is a React based application.  
Used Javascript, HTML and CSS.  

Libraries used:
- MaterialUI for styling
- React-Router for routing and navigation
- http-proxy-middleware for proxy
- Prop-types for React component prop validation
- React-Final-Form for creating and managing forms using React
- Final-Form-Arrays and React-Final-Form-Arrays to allow user to create extra fields in the form
- Lodash for useful functions
- React-Datepicker for calendar functionality
- Axios for requests
- Recharts for data visualization
- Recoil for global state management

# Backend
The backend is a Node-Express server.  

Libraries used:
- Express for server creation and routing handling
- Nodemon for automatic builds
- Concurrently for running both servers concurrently
- Passport for use with OAuth and user validation
- Mongoose for interaction with MongoDB
- Cookie-session for creating and storing information in the users cookie
- Body-Parser for parsing the body of requests

# Database
The database used for this project is the non-relational database MongoDB 

# Deployment
This app is deployed using Heroku as it enables:
- Dynamic port binding
- Specifying Node Environments
- Specifying start scripts
- Creates .ignore files for dependencies we don't want to include

