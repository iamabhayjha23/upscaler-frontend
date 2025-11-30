import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleSubmission, updateSubmission } from "../services/api";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getSingleSubmission(id);
        setForm(res.data);
      } catch (err) {
        console.error("Error loading submission:", err);
        alert("Failed to load item");
        navigate("/dashboard");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id, navigate]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateSubmission(id, form);
      alert("Updated successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error("EDIT ERROR:", err);
      alert("Update failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Submission</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="name" value={form.name || ""} onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" />
        <input name="email" value={form.email || ""} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" />
        <input name="phone" value={form.phone || ""} onChange={handleChange} placeholder="Phone" className="w-full border p-2 rounded" />
        
        <input name="role" value={form.role || ""} onChange={handleChange} placeholder="Role" className="w-full border p-2 rounded" />
        <input name="experience" value={form.experience || ""} onChange={handleChange} placeholder="Experience" className="w-full border p-2 rounded" />
        <input name="expertise" value={form.expertise || ""} onChange={handleChange} placeholder="Expertise" className="w-full border p-2 rounded" />
        
        {/* New Fields */}
        <input name="budget" value={form.budget || ""} onChange={handleChange} placeholder="Budget" className="w-full border p-2 rounded" />
        <input name="talents" value={form.talents || ""} onChange={handleChange} placeholder="Talents" className="w-full border p-2 rounded" />
        <input name="persona" value={form.persona || ""} onChange={handleChange} placeholder="Persona" className="w-full border p-2 rounded" />
        
        <textarea name="notes" value={form.notes || ""} onChange={handleChange} placeholder="Notes" className="w-full border p-2 rounded h-24" />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}