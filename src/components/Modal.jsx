"use client";
import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../lib/firebase";

function Modal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // Booléen pour savoir si c'est une inscription ou une connexion
  return (
    <div className="fixed inset-0 text-white bg-black/50 flex justify-center items-center">
      <div className="relative w-96 bg-white rounded-lg p-6">
        <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 flex justify-center items-center rounded cursor-pointer">
          <span>X</span>
        </div>
        <h2 className="text-center text-xl font-semibold text-black mb-4">
          Sign In
        </h2>
        <form className="space-y-2">
          <div className="w-3/4 mx-auto">
            <label htmlFor="email" className="text-black">
              Entrez votre email
            </label>
            <input
              type="text"
              placeholder="email"
              id="email"
              value={email}
              className="text-gray-600 border rounded px-2 outline-blue-400 w-full"
            />
          </div>
          <div className="w-3/4 mx-auto">
            <label htmlFor="password" className="text-black">
              Entrez votre mot de passe
            </label>
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              className="text-gray-600 border rounded px-2 outline-blue-400 w-full"
            />
          </div>
          <div className="w-3/4 mx-auto">
            <label htmlFor="confirmpassword" className="text-black">
              Confirmez votre mot de passe
            </label>
            <input
              type="password"
              placeholder="password"
              id="confirmpassword"
              value={confirmpassword}
              className="text-gray-600 border rounded px-2 outline-blue-400 w-full"
            />
          </div>
          <button
            type="submit"
            className="block text-white bg-blue-500 px-5 py-1 mt-4 mx-auto cursor-pointer rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Modal;
