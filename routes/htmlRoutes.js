// htmlROutes is going to handle all the serving of the html pages

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// Don't think I nee this, but will add just in case
const express = require('express')


// ===============================================================================
// ROUTING
// ===============================================================================

// Here app is the express code. Express is going to be called in main file server.js
module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    // "/notes" responds with the notes.html file
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // "All other routes responds with the index.html file
    // asterisk means that if there is no matching route entered, then it just returns this page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};

// Have created an htmlRoute file that I understand
// Using the app parameter instead of route function