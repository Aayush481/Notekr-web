import React, { useState } from "react";
import "./signUp.css";
import { getAuth, signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import app from "./firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
      }
      );
  };
  const navigate = useNavigate();

  // Function to validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset previous errors

    // Validation checks
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

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        toast.success("Login successful!");
        navigate("/create");
        console.log("User logged in:", userCredential.user);
      })
      .catch((error) => {
  let message = "An error occurred!"; // Default message

  if (error.code === "auth/invalid-email") {
    message = "Invalid email address.";
  } else if (error.code === "auth/wrong-password") {
    message = "Incorrect password.";
  } else if (error.code === "auth/user-not-found") {
    message = "User does not exist.";
  } else {
    message = "please Enter Valid Email or password"; // Show Firebase's actual error message if unknown
  }

  toast.error(message);
  setErrorMessage(message);
});
  };

  return (
    <div className="flex justify-center mt-[6rem] h-auto items-center  ">
      <div className="bg-white p-8 rounded-lg shadow-md w-[80%] max-w-md bg1">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
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
            Login
          </button>
          <p>or</p>
          <button
            type="button"
            onClick={signInWithGoogle}
            className="w-full text-blue500 border border-blue-900 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex justify-center items-center gap-[0.5rem]">
            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" className="size-[30px] bg-transparent rounded-2xl" />Sign in with Google
            </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;