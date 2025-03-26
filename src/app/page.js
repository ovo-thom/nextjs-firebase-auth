"use client";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("signin");

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-screen bg-stone-950">
      <Navbar openModal={handleOpenModal} />
      <div className="text-white text-center text-4xl pt-20">
        Hi, Sign Up or Sign In
      </div>
      {isOpen && <Modal type={modalType} closeModal={handleCloseModal} />}
    </div>
  );
}
