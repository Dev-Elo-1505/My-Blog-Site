import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    console.log(formValues);
  };
  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      navigate("/admin");
      console.log("Login as", userCredential.user);
    } catch (error: any) {
      console.log(error.code, error.message);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-secondary">
      <form className="bg-primary p-5 rounded" onSubmit={loginUser}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            required
            className="rounded bg-secondary w-full p-2 mt-2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            required
            className="rounded bg-secondary w-full p-2 mt-2"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full text-center mt-4 bg-accent text-primary rounded p-1 cursor-pointer"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
