import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { signup } from "../lib";

const Signup = () => {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  async function submit(e) {
    e.preventDefault();
    console.log(form);
    const data = await signup(form);
    // const { data } = await axios.post("api/signup", form);
    console.log("data:", data);
    setMessage("Redirecting you back to main page");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }
  return (
    <div>
      {message && <h1 className="message">{message}</h1>}
      <form onSubmit={submit}>
        <input
          type="text"
          className="username"
          name="username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          placeholder="Username..."
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          placeholder="Password..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
