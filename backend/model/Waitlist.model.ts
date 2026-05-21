import { Schema, model, models } from "mongoose";

const WaitlistSchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    postcode: { type: String, required: true },
    city: { type: String, required: true },
  },
  { timestamps: true },
);

const Waitlist = models.Waitlist || model("Waitlist", WaitlistSchema);

export default Waitlist;
