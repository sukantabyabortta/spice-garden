const contactForm = {
   form: {
    title: "Send Us a Message",
    buttonText: "Send Message",
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your name",
        required: true,
        minLength: 3
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number"
      },
      {
        name: "subject",
        label: "Subject",
        type: "select",
        required: true,
        options: [
          { value: "", label: "Select a subject" },
          { value: "reservation", label: "Table Reservation" },
          { value: "catering", label: "Catering Inquiry" },
          { value: "feedback", label: "Feedback" },
          { value: "complaint", label: "Complaint" },
          { value: "other", label: "Other" }
        ]
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Write your message here...",
        required: true,
        minLength: 10
      }
    ]
  },
};

export default contactForm;
