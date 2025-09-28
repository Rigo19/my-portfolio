import { useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formsubmit.co/ajax/rigo.middle08@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        router.push("/thankYou");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Submission failed.");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="w-full flex justify-center py-20">
        <h1 className="text-5xl font-bold underline decoration-blue-600 text-center">
          Contact Me
        </h1>
      </div>

      <div className="text-center items-center justify-center max-w-xl mx-auto p-8">
        <p className="text-lg text-start mb-4">
          I&apos;m always open to new opportunities and challenges...
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded bg-gray-100 text-black"
            placeholder="Your email"
          />

          <textarea
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 h-32 border rounded bg-gray-100 text-black"
            placeholder="Your message..."
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition transform hover:scale-105"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
