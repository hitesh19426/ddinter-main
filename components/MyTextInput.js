import { useField } from "formik";

function MyTextInput({ label, ...props }) {
  const [field] = useField(props);

  return (
    <div className="col-md-10 ms-5 mt-3">
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`form-control border-secondary`}
      />
    </div>
  );
}

export default MyTextInput;
