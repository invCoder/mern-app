Backend - In postman's post url like http://localhost:5000/api/notes go to body and in raw data add object like { "name": "first name", "age": "number", "gender": "M"} and then in test dropdown select json. Then click on post and we set get the object in MonogoDB. to get the data from db create get api url in postman. 

* Added react-datepicker and also use formating it.

* when i click on form submit I also want to get the changes reflected to the table of note.
To update the table of notes when a new note is submitted, you can follow these steps: Dispatch the fetchNotes Action After Submission:
After successfully adding a new note, dispatch the fetchNotes action to update the list of notes. Update the State After Submission:
If you have control over the state within the NoteForm component, update the state locally with the new note after submission.


"dependencies": =>

    "@reduxjs/toolkit": "^2.0.1" - 
  reduxjd toolkit we used to use slice and create thunk to intergrate the backkend API using redux reducer.
    
    "@testing-library/jest-dom": "^5.17.0"- 
  it used being used to write the unit test of the components of client foler, i,e. using jest.
    
    "@testing-library/react": "^13.4.0" - 
  It is used for wirte unit test cases. 
    
    "@testing-library/user-event": "^13.5.0"- 
  Used for testing code written in the project.
    
    "axios": "^1.6.5" - 
  This is used for request call like post get etc. we use async calls for api's
    "cors": "^2.8.5" - 
  It is dependencies used for API call error when we intergrate it with frontend. So we need to use it in backend app.js
    
    "less": "^4.2.0" - 
  It is not configured yet,, we  are currenlty using css only. In upcominng commit we'll configure.
    
    "less-loader": "^11.1.4- 
  it is used to load less which is preprocessor css. Prepocesser css convert to css when we create build using web-pack.
    
    "react": "^18.2.0" - 
  We are using react 18 in this project with normal js. In initail commits we haven't used pros only used regular hooks.
    
    "react-dom": "^18.2.0" - 
  It boiler plate depedencies.
    
    "react-redux": "^9.1.0" - 
  We are intergrating api into frontend using redux and used monogoDB for DB data. npm i react-redux.
    
    "react-scripts": "5.0.1"- 
  It's one of the boiler plate dependencies when we use npx create-react-app <app-name>.
    
    "redux": "^5.0.1" - 
  Used to intergrate rest api in frontend.
    
    "redux-thunk": "^3.1.0" - 
  Rather than execute some logic now, we can write a function body or code that can be used to perform the work later. 
    For Redux specifically, "thunks" are a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
    
    "web-vitals": "^2.1.4" - Boiler plate dependencies.
