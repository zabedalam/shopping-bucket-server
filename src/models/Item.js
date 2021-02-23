const { Schema, model } = require("mongoose");

const ItemSchema = new Schema({
  name: {
    type: String,
    default: true
  },
  cost: {
    type: Number,
    default: 0
  },
  quantity: String,
  isComplete: {
    type: Boolean,
    defalt: false
  }
});

const Item = model("Item", ItemSchema);
module.exports = Item;
