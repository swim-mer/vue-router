# vue-router

## Installing the package
- Install Node.js and npm at https://nodejs.org/
- Check for successfull installs:
  - `$ node -v ; npm -v`
- Update npm:
  - `$ npm install npm@latest -g`
- Install Vue CLI:
  - `$ npm install -g @vue/cli`
- Install global addon for `vue serve`:
  - `$ npm install -g @vue/cli-service-global`
- Install yarn
  - `$ brew install yarn`
- Download axios
  - `$ yarn add axios`
- Install axios
  - `$ npm install axios --save`

## Running the server on a Mac
- Inside root directory of `vue-router-api`:
  - `$ npm install`
  - `$ npm run build`
  - `$ npm run serve`
  
  Or, for user interface, run:
  - `$ vue ui`
  - Select `Tasks` on left menu
  - Select `serve` under Project tasks
  - Select `Run Task`
  - Select `Open app` to view in browser
  
## Using the interface in a browser
- Navigate to `http://localhost:8080/`
- Select `Patients` to view a list of patients sorted by id
- Select `Orders` to view a list of orders sorted by id
