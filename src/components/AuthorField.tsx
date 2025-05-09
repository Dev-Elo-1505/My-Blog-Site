// components/ReadOnlyField.tsx
interface ReadOnlyFieldProps {
    label: string;
    value: string;
  }
  
  const AuthorField = ({ label, value }: ReadOnlyFieldProps) => (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        readOnly
        className="bg-secondary p-2 outline-none rounded-md cursor-not-allowed"
      />
    </div>
  );
  
  export default AuthorField;
  
