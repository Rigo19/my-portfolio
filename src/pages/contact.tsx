import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {

    /* keep just in case I want to use api call for submit logic

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        setStatus("Sending...");

        try{
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, message })
            });

            if(res.ok){
                setStatus("Message sent sucessfully!");
                setEmail("");
                setMessage("");
            }else{
                setStatus("Failed to send. Please try again.");
            }
        } catch(error){
            console.error("Error sending message:", error);
            setStatus("An error occured. Please try again.");
        }
    };
    */

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Contact Page Title */}
            <div className="w-full flex justify-center py-20">
                <h1 className="text-5xl font-bold underline decoration-blue-600 text-center">
                Contact Me
                </h1>
            </div>

            {/* Contact Info */}
            <div className="text-center items-center justify-center max-w-xl mx-auto p-8">
                {/* Description */}
                <p className="text-lg text-start mb-4">
                    I am always open to new opportunities and challenges. Got any question or want 
                    to collaborate? Feel free to reach out — whether to discuss a project,
                    explore an idea, or just say hello. Leave your details, and I'll get back to you as soon as possible.
                </p>

                {/* Form */}
                <form 
                className="space-y-4" 
                action="https://formsubmit.co/rigo.middle08@gmail.com"
                method="POST"
                >
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border rounded bg-gray-100 focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email"
                    />

                    <textarea
                        name="message"
                        required
                        className="w-full px-4 py-2 h-32 border rounded bg-gray-100 focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message..."
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition transform hover:scale-105"
                    >
                        Send
                    </button>

                    {/*Status Feedback And Redirect*/}
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value="http://localhost:3002/thankYou"/>

                </form>
            </div>
        </div>
  );
}
