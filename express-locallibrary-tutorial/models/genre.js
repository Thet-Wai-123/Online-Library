const mongoose = require("mongoose");
const { modelName } = require("./author");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
});

GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});



// Export model
module.exports = mongoose.model("Genre", GenreSchema);
