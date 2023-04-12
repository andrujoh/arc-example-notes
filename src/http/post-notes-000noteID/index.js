const arc = require("@architect/functions");

exports.handler = arc.http.async(edit);

async function edit(req) {
  // get the note (including title, body and noteID) from the form post
  const note = req.body;

  // save the updated note
  const data = await arc.tables();
  await data.notes.put(note);

  return {
    location: "/notes",
  };
}
