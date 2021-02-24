const { Schema, model } = require("mongoose");

const BucketSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    cost: {
      type: Number,
      default: 0
    },
    items: {
      type: Schema.Types.ObjectID,
      ref: "Item"
    }
  },
  { timestamps: true }
);

const Bucket = model("Bucket", BucketSchema);
module.exports = Bucket;
