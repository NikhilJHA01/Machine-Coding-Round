import React, { useState } from "react";
import { useNavigate } from "react-router";
import useLocalStorage from "./useLocalStorage";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [database, setDatabase] = useLocalStorage("database", []);

  const handleSubmit = (e) => {
    e.preventDefault();
    database.push({ user: email, password: pass });
    setDatabase(database);
    console.log(email);
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="full Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => navigate("/login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
