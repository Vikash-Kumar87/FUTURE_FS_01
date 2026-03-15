import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const sectionRef = useRef(null);
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_atn6s8j";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_7uz9iy4";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "mpHZChfTgXIppwKT6";

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured correctly.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }

    setIsSending(true);
    setIsSent(false);

    try {
      const formData = new FormData(form.current);
      const name = formData.get("user_name")?.toString().trim() || "";
      const email = formData.get("user_email")?.toString().trim() || "";
      const subject = formData.get("subject")?.toString().trim() || "";
      const message = formData.get("message")?.toString().trim() || "";

      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: name,
          user_email: email,
          subject,
          message,
          from_name: name,
          from_email: email,
          reply_to: email,
        },
        { publicKey }
      );

      setIsSent(true);
      form.current.reset();
      toast.success("Message sent successfully! ✅", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      const errorText = error?.text || error?.message || "Please try again.";
      toast.error(`Failed to send message: ${errorText}`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="flex flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      <div
        className={`text-center mb-12 sm:mb-16 ${
          isVisible ? "cinematic-item-visible" : "cinematic-item-hidden"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div
        className={`mt-4 sm:mt-8 w-full max-w-md bg-[#0d081f] p-5 sm:p-6 rounded-lg shadow-lg border border-gray-700 ${
          isVisible ? "cinematic-item-visible" : "cinematic-item-hidden"
        }`}
        style={{ animationDelay: "var(--cinematic-stagger)" }}
      >
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Message after sending */}
        {isSent && (
          <p className="text-green-500 mt-4 text-center">
            ✅ Your message has been sent!
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
