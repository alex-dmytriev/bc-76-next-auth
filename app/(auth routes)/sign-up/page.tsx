"use client";
import { register } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { Credentials } from "@/types/user";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const setUser = useAuthStore((state) => state.setUser);
  const handleSubmit = async (formData: FormData) => {
    try {
      const values = Object.fromEntries(formData) as unknown as Credentials;
      const user = await register(values);
      if (user) {
        setUser(user);
        router.push("/profile");
      }
    } catch (error) {
      setError((error as ApiError).message ?? "something went wrong");
    }
  };
  return (
    <>
      <h1>Sign up</h1>
      <form action={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default SignUpPage;
