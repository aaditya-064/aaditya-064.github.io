import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: false,
    },
    email_address: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    type_project: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const contactModel = mongoose.model("users", contactSchema);
export default contactModel;
