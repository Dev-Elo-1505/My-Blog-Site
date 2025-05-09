
interface FormFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    required?: boolean;
  }
  
  const FormField = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    required = false
  }: FormFieldProps) => (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="bg-secondary p-2 outline-none rounded-md"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
  
  export default FormField;