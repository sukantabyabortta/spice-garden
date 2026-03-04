import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const DynamicForm = ({ fields, validationSchema, onSubmit, buttonText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const submitHandler = async (data) => {
    alert("✅ Form submitted successfully");
    await onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>

      {/* DEBUG (optional – remove later) */}
      {Object.keys(errors).length > 0 && (
      <ul style={{ color: "red", fontSize: "12px", display: "none" }}>
      {Object.entries(errors).map(([key, val]) => (
            <li key={key}>
            {key}: {val?.message}
            </li>
      ))}
      </ul>
      )}

      {fields.map((field, i) => (
        <div className="form-group" key={i}>
          <label className="form-label">
            {field.label} {field.required && "*"}
          </label>

          {/* TEXTAREA */}
          {field.type === "textarea" && (
            <textarea
              {...register(field.name)}
              rows={field.rows || 5}
              placeholder={field.placeholder}
              className={`form-control ${errors[field.name] ? "is-invalid" : ""}`}
            />
          )}

          {/* SELECT */}
          {field.type === "select" && (
            <select
              {...register(field.name)}
              className={`form-control ${errors[field.name] ? "is-invalid" : ""}`}
            >
              {field.options.map((opt, idx) => (
                <option key={idx} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}

          {/* INPUT */}
          {!["textarea", "select"].includes(field.type) && (
            <input
              type={field.type}
              {...register(field.name)}
              placeholder={field.placeholder}
              className={`form-control ${errors[field.name] ? "is-invalid" : ""}`}
            />
          )}

          {errors[field.name] && (
            <small className="text-danger">
              {errors[field.name]?.message}
            </small>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="btn btn-primary w-100 p-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : buttonText}
      </button>
    </form>
  );
};

export default DynamicForm;