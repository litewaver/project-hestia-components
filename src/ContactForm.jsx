import React from 'react';
import './App.css';

const ContactForm = () => {
  return (
    <section className="max-w-xl mx-auto mt-10 p-8 border-2 border-red-500 rounded-2xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            rows="5"
            placeholder="Your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-red-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;