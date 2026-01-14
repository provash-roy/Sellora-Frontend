import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validate = () => {
    setError("");
    if (!name.trim()) return "Please enter your name.";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) return "Please enter a valid email.";
    if (!message || message.trim().length < 10)
      return "Please enter a message (10+ chars).";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) return setError(v);

    setLoading(true);
    setError("");
    setSuccess("");
    try {
      // Try to post to backend; if not available this may fail.
      await axios.post("/api/contact", {
        name,
        email,
        phone,
        subject,
        message,
      });
      setSuccess("Thanks — your message has been sent.");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (err) {
      // graceful fallback: show friendly message
      setError(
        err?.response?.data?.message ||
          "Failed to send message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have questions or need help? Fill the form and we'll get back to you
            within 1 business day.
          </p>

          {error && (
            <div className="mb-4 text-sm text-red-700 bg-red-100 p-2 rounded">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 text-sm text-green-700 bg-green-100 p-2 rounded">
              {success}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                Full name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="you@example.com"
                type="email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone (optional)
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="+1 555 1234"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="What is this about?"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="How can we help you?"
              />
            </div>

            <div className="md:col-span-2 flex items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send message"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setPhone("");
                  setSubject("");
                  setMessage("");
                  setError("");
                  setSuccess("");
                }}
                className="px-4 py-2 border rounded"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        <aside className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold">Customer Support</h3>
            <p className="text-gray-600">support@sellora.example</p>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Head Office</h3>
            <p className="text-gray-600">123 Market St, Suite 100</p>
            <p className="text-gray-600">City, Country</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Follow us</h3>
            <div className="flex items-center gap-3 mt-2">
              <a className="text-gray-600 hover:text-indigo-600">Twitter</a>
              <a className="text-gray-600 hover:text-indigo-600">Facebook</a>
              <a className="text-gray-600 hover:text-indigo-600">Instagram</a>
            </div>
          </div>

          <div className="mt-auto text-sm text-gray-500">
            We aim to respond within one business day.
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
