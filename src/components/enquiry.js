import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enquirySchema } from "./enquirySchema";
import Breadcrumbs from "../components/Breadcrumbs";

const breadcrumbs = [
  { label: "Home", link: "/spice-garden" },
  { label: "Enquiry" },
];

function Enquiry() {
  const title = "Customer Enquiry";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(enquirySchema),
  });

  const onSubmit = async (data) => {
    console.log("✅ Enquiry Data:", data);

    // simulate API call
    await new Promise((res) => setTimeout(res, 1000));

    reset();
  };

  return (
    <>
    {/* Breadcrumbs */}
      <Breadcrumbs items = {breadcrumbs} />
    <div className="enquery-cont">
        <h1>{title}</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)} noValidate id="enquiryForm">
            <div className="form-row">
              <label htmlFor="name">Your Name</label>
              <span className="separator">:</span>
              <input
                type="text"
                id="name"
                placeholder="Customer Name"
                {...register("name")}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="form-row">
              <label htmlFor="email">Email Address</label>
              <span className="separator">:</span>
              <input
                type="email"
                id="email"
                placeholder="Mail@example.com"
                {...register("email")}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="form-row">
              <label htmlFor="bill">Bill Number</label>
              <span className="separator">:</span>
              <input
                type="text"
                id="bill"
                placeholder="Bill Number"
                {...register("bill")}
              />
              {errors.bill && <p className="error">{errors.bill.message}</p>}
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone Number</label>
              <span className="separator">:</span>
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                {...register("phone")}
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </div>

            <div className="form-row">
              <label htmlFor="enquiry">Customer Enquiry</label>
              <span className="separator">:</span>
              <textarea
                id="enquiry"
                rows="5"
                placeholder="Your Queries"
                {...register("enquiry")}
              />
              {errors.enquiry && <p className="error">{errors.enquiry.message}</p>}
            </div>

            <div className="button-group">
              <button
                type="submit"
                className="btn btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </button>

              <button
                type="button"
                className="btn btn-reset"
                onClick={() => reset()}
              >
                RESET
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Enquiry;