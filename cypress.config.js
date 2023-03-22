const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
      baseUrl: "https://cypress.vivifyscrum-stage.com",
      env: {
        apiUrl: "https://cypress-api.vivifyscrum-stage.com/api",
        testUserEmail: "vezbatest123@gmail.com",
        testUserPassword: "12345vezba",
      }

    },
  
});