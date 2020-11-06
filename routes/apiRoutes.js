// apiRoutes is going to handle all the GET and POST requests for this server


// Hooking to store.js

const store = require('../db/store');


// Going to create routes for api get and post

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    // Information is recieved
    // GET "/api/notes" responds with all notes from the database
    app.get("/api/notes", (req, res) => {
        store.getNotes()
            // Here the getNotes function-- a method in the Store class is initialized.
            // The function reads and returns the contents of db.js file
            // Then parses json.parses the object
            // and puts it in an array that is returned
            .then((notes) => res.json(notes))
            // This content is now returned as a JSON response. Notes = res
            .catch((err) => res.status(500).json(err));
        // If not a JSON object, returs an error
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------


    // Information is pushed
    app.post("/api/notes", (req, res) => {
        store
            // Initializes addNote method with a parameter of req.body
            .addNote(req.body)
            // Then newly defined note is set to equal response
            .then((note) => res.json(note))
            .catch((err) => res.status(500).json(err));
        // If not a JSON object, returs an error
    });

    //   DELETE "/api/notes" deletes the note with an id equal to req.params.id.... (what is this?)
    app.delete("/api/notes/:id", (req, res) => {
        // Don't know what the example is doing here. Wil have to figure this out
        // Seems like it used a store object function
        store
            // Initializes removeNote method
            .removeNote(req.params.id)
            // If ok: is true it deletes?
            .then(() => res.json({ ok: true }))
            .catch((err) => res.status(500).json(err));
        // If not a JSON object, returs an error
        // This method should read thorugh all notes, remove note with chosen id (will have to give each note a random id)
        // then rewrite notes
    });
};