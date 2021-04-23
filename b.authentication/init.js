const fs = require('fs');
const path = require('path');

// Default folder path for the application
const defaultFolderPath = './';

// Create the Folder based on the provide folder name
function createFolder(folderName) {
    var folder = defaultFolderPath + folderName;
    var isExist = fs.existsSync(folder);

    if (!isExist) {
        fs.mkdirSync(path.join(defaultFolderPath, folderName), (err) => {
            if (err) {
                return console.error(err);
            }
            console.log(folderName + ' folder created successfully!');
        });
    }
}

// Create the New File with Content
function createFile(fileName, content) {
    var file = defaultFolderPath + fileName;
    var isExist = fs.existsSync(file);
    if (!isExist) {
        fs.writeFile(fileName, content, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log(fileName + ' file created successfully!');
        });
    }
}

// Configuration of the Application
createFolder('tests');

// Configuration of the Application
createFolder('config');

// Public Folder exposed to outside world
createFolder('public');

// Source of the Application
createFolder('src');

setTimeout(function () {

    // images / styles / scripts
    createFolder('src/assets');

    // Application Components
    createFolder('src/components');

    // Smart Components
    createFolder('src/containers');

    // Context for Components
    createFolder('src/context');

    // Connectors for the Application
    createFolder('src/hooks');

    // State Management of the Application
    createFolder('src/redux');

    // UI Services
    createFolder('src/services');

    // Helper Functions
    createFolder('src/utils');

}, 500);

setTimeout(function () {

    // Images for the Application
    createFolder('src/assets/images');

    // Fonts for the Application
    createFolder('src/assets/fonts');

    // Design sheets for the Application
    createFolder('src/assets/styles');

    // Common Scripts for the Application
    createFolder('src/assets/scripts');


    // Shared Components for the Application
    createFolder('src/components/common');

}, 500);

setTimeout(function () {

    // Create a wenpack common configuration blank file
    createFile('config/webpack.common.js', '');

    // Create a wenpack development configuration blank file
    createFile('config/webpack.dev.js', '');

    // Create a wenpack production configuration blank file
    createFile('config/webpack.prod.js', '');


    // Create a default index.html file with 'Hello World' text
    createFile('public/index.html', "<!DOCTYPE html>\n<html>\n\n<head></head>\n\n<body>\n\tHello World\n</body>\n\n</html>");


    // Create a App.js source blank file
    createFile('src/App.js', '');

    // Create a bootstrap.js source blank file
    createFile('src/bootstrap.js', '');

    // Create a index.js source file and import bootstrap file
    createFile('src/index.js', "import('./bootstrap');");

}, 500);

setTimeout(function () {
    console.log('All the basic application UI folder structure has been created successfully!...')
}, 2000);
