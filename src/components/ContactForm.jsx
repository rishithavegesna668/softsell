import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="p-10 bg-blue-50">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        {["name", "email", "company", "message"].map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
        ))}
        <select name="license" className="w-full p-3 border rounded" onChange={handleChange} required>
          <option value="">Select License Type</option>
          <option value="Office">Microsoft Office</option>
          <option value="Adobe">Adobe Suite</option>
          <option value="Antivirus">Antivirus</option>
        </select>
        <button className="bg-blue-600 text-white px-6 py-3 rounded">Submit</button>
      </form>
    </section>
  );
};
export default ContactForm;
