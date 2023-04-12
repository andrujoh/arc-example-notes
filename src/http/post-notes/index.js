const arc = require("@architect/functions");
const save = require("./save");
const sanitizeHtml = require("sanitize-html");

exports.handler = arc.http.async(create);

async function create(req) {
  // create the partition and sort keys
  const title = sanitizeHtml(req.body.title);
  const body = sanitizeHtml(req.body.body);

  // save the note
  try {
    await save({ title, body });
  } catch (error) {
    console.log(`Got an error`, error);
  }

  return {
    location: "/notes",
  };
}
