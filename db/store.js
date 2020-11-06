const util = require("util");
const fs = require("fs");

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
// To put in URL of specific note
const { v1: uuidv1 } = require("uuid");

// Promisify our writeFile & readFile functions
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);


// Creating a class
class Store {
    // defining a read method
    read() {
        // Asynchronously reading db.jason file
        return readFileAsync("db/db.json", "utf8");
    }
    // Defining a write method
    write() {
        // Asynchronously writing note's content to db.jason file
        // Note's content is probably coming from front-end java. Will have to check this out. The object is
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }

    getNotes() {
        return this.read().then((notes) => {
            // Initialized read function that returns info in db.json
            // Then starts new function with the parameter of notes
            let parsedNotes;
            // Going to parse notes

            // If notes isn't an array or can't be turned into one, send back a new empty array
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }

            return parsedNotes;
        });
    }

    addNote(note) {
        // breaking down note object so we could use title and text variable
        const { title, text } = note;
        // If null in title or null in text a new Error is thrown
        if (!title || !text) {
            throw new Error("Note 'title' and 'text' cannot be blank");
        } else {

            // Add a unique id to the note using uuid package
            const newNote = { title, text, id: uuidv1() };

            // Get all notes, add the new note, write all the updated notes, return the newNote
            // Getting all notes parsed
            // newNote is grabbing the Title and the text values of the note and adding a random id to it.
            // newNote now has to be added to the notes we have recieved from getNote which is parsedNotes
            // Now data in parsedNotes had to be rewritten
            this.getNotes()
                .then(() => {
                    parsedNotes.push(newNote)
                    // Might have to parse
                    console.log(newNote)
                        .then(notes => {
                            return parsedNotes.write()

                        })
                })


            // Have to come up with this function




        }



    }

    removeNote(id) {
        // Need to define this method

        // Read, remove with particular id, rewrite


    }


}

module.exports = Store;