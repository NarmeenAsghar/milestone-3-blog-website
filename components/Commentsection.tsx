"use client"
import React, { useState } from "react";

function Commentsection() {
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare the data for submission
    const formData = {
      comment,
      email,
      phone,
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Reset form
    if (res.ok) {
      alert("Comment submitted successfully!");
      setComment("");
      setEmail("");
      setPhone("");
    } else {
      alert("There was an error.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="font-inter font-bold text-[#007bff] text-[24px] sm:text-[30px] mb-4">
        Comment Your Thoughts
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label className="font-inter text-[16px] text-[#333333] font-normal">
          Email
        </label>
        <input
          type="email"
          className="w-full p-2 border border-[#75757580] rounded-[4px] mt-1 mb-4 text-[14px]"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="font-inter text-[16px] text-[#333333] font-normal">
          Phone Number
        </label>
        <input
          type="tel"
          className="w-full p-2 border border-[#75757580] rounded-[4px] mt-1 mb-4 text-[14px]"
          placeholder="Your phone number (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label className="font-inter text-[16px] text-[#333333] font-normal mt-4">
          Comment
        </label>
        <textarea
          className="w-full p-2 border border-[#75757580] rounded-[4px] mt-1 text-[14px]"
          placeholder="Write your comment..."
          value={comment}
          rows={4}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <button
          type="submit"
          className="mt-4 w-full bg-[#007bff] text-[#ffffff] p-2 rounded-[4px] font-inter text-[18px] font-normal"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
}

export default Commentsection;
