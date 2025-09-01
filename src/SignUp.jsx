import React, { useState } from "react";
import "./signUp.css";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import app from "./firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => { 
        const user = result.user;
        console.log("User signed in with Google:", user);
        toast.success("Google sign-in successful!");
        navigate('/create');
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
        toast.error("Google sign-in failed. Please try again.");
      });
  };
  // Call this function to trigger Google sign-in
  // Function to validate email format using RegEx
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const createUser = () => {
    setErrorMessage(""); // Reset errors before attempting signup

    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        toast.success("Account created successfully!");
        navigate('/create');
        console.log("User created:", userCredential.user);
      })
      .catch((error) => {
        let message = "An error occurred!";
        if (error.code === "auth/invalid-email") {
          message = "Invalid email address.";
          toast.error(message);
        } else if (error.code === "auth/weak-password") {
          message = "Password should be at least 6 characters.";
          toast.error(message);
        } else if (error.code === "auth/email-already-in-use") {
          message = "Email already in use.";
          toast.error(message);
        }
        setErrorMessage(message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    if (!email || !pass) {
      toast.error("Email and password are required.");
      setErrorMessage("Email and password are required.");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email.");
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (pass.length < 6) {
      toast.error("Password should be at least 6 characters.");
      setErrorMessage("Password should be at least 6 characters.");
      return;
    }

    setErrorMessage(""); // Reset errors before submitting
    createUser();
    
  };

  return (

    <div className="flex justify-center mt-[6rem] h-auto items-center  w-[100%] relative ">
   
      <div className="bg-white p-8 rounded-lg shadow-md w-[100%] max-w-md bg1 child">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2  ">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPass(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {errorMessage && (
            <div className="text-red-800 text-lg mt-2 bg-white p-2 rounded-lg">{errorMessage}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
          <p>or</p>
          <button
            type="button"
            onClick={signInWithGoogle}
            className="w-full text-blue500 border border-blue-900 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex justify-center items-center gap-[0.5rem]">
            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" className="size-[30px] bg-transparent rounded-2xl" />Sign Up with Google
            </button>
        </form>
      </div>
    </div>
  
  );
};

export default SignUp;