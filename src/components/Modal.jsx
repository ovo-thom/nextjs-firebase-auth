"use client";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../lib/firebase";

function Modal({ type, closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (type === "signup") {
      if (password !== confirmpassword) {
        setError("Les mots de passe ne correspondent pas");
        setLoading(false);
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Utilisateur inscrit avec succès
          const user = userCredential.user;
          console.log("Utilisateur inscrit :", user);
          setLoading(false);
          closeModal();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`Erreur d'inscription : ${errorMessage}`);
          setLoading(false);
        });
    } else {
      // Connexion de l'utilisateur avec Firebase
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Utilisateur connecté avec succès
          const user = userCredential.user;
          console.log("Utilisateur connecté :", user);
          setLoading(false);
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setError("");
          closeModal();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(`Erreur de connexion : ${errorMessage}`);
          setLoading(false);
        });
    }
  };
  return (
    <div className="fixed inset-0 text-white bg-black/50 flex justify-center items-center">
      <div className="relative w-96 bg-white rounded-lg p-6">
        <div
          onClick={closeModal}
          className="absolute top-2 right-2 w-6 h-6 bg-red-500 flex justify-center items-center rounded cursor-pointer"
        >
          <span>X</span>
        </div>
        <h2 className="text-center text-xl font-semibold text-black mb-4">
          {type === "signin" ? "Sign In" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="w-3/4 mx-auto">
            <label htmlFor="email" className="text-black">
              Entrez votre email
            </label>
            <input
              type="text"
              placeholder="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              className="text-gray-600 border rounded px-2 outline-blue-400 w-full"
            />
          </div>
          {type === "signup" && (
            <div className="w-3/4 mx-auto">
              <label htmlFor="confirmpassword" className="text-black">
                Confirmez votre mot de passe
              </label>
              <input
                type="password"
                placeholder="password"
                id="confirmpassword"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="text-gray-600 border rounded px-2 outline-blue-400 w-full"
              />
            </div>
          )}
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="block text-white bg-blue-500 px-5 py-1 mt-4 mx-auto cursor-pointer rounded"
          >
            {loading
              ? "Chargement..."
              : type === "signin"
              ? "Se connecter"
              : "S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Modal;
