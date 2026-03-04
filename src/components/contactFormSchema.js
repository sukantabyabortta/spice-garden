import * as yup from "yup";

export const contactFormSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Full Name is required"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  // 🔥 IMPORTANT FIX
  phone: yup
    .string()
    .nullable()
    .notRequired(),

  subject: yup
    .string()
    .required("Please select a subject"),

  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required")
});