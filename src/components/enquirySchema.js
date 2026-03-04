import * as yup from "yup";

export const enquirySchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),

  bill: yup
    .string()
    .nullable()
    .matches(/^[0-9]*$/, "Bill number must be numeric"),

  phone: yup
    .string()
    .nullable()
    .matches(/^[6-9]\d{9}$/, "Enter valid 10 digit Indian phone number"),

  enquiry: yup
    .string()
    .required("Enquiry message is required")
    .min(10, "Message must be at least 10 characters"),
});