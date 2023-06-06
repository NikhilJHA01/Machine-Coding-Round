import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./auth";
import useLocalStorage from "./useLocalStorage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const [database] = useLocalStorage("database", [
    {
      user: "a@gmail.com",
      password: "abc"
    },
    {
      user: "Kanchi@gmail.com",
      password: "password1"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = database.find((data) => data.user === email);
    if (user && user.password === password) {
      setSuccess(true);
      setError(false);
      auth.login();
      navigate("/home");
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Log In</h2>
      <form className="form" onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Full name</label>
        <input value={name} name="name" id="name" placeholder="full Name" /> */}
        <label htmlFor="email"> Email Id </label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="abc@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password"> Password </label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In </button>
        <div className="error-message">{error && "error message"}</div>
        <div className="success-message">{success && "Log In Successfull"}</div>
      </form>
      <button className="link-btn" onClick={() => navigate("/register")}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
