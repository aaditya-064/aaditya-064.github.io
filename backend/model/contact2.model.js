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
    contact_number: {
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
    type_of_company: {
      type: String,
      enum: ["IT Consulting", "Software Development"],
      default: "null",
    },
    topic_elaboration: {
      type: String,
    },
    type_project: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const contactModel = mongoose.model("Clients", contactSchema);
export default contactModel;
