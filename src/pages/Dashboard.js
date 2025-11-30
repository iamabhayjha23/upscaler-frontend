import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSubmissions, deleteSubmission } from "../services/api";
import { FaTrash, FaEdit } from "react-icons/fa";
import UplersBrand from "../components/UplersBrand";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await getSubmissions();
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching:", err);
      alert("Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await deleteSubmission(id);
      setItems((prev) => prev.filter((i) => i.id !== id));
    } catch (err) {
      console.error("DELETE ERROR:", err);
      alert("Delete failed");
    }
  };

  const InfoRow = ({ label, value }) => (
    <div className="flex items-start gap-4">
      <span className="bg-white px-3 py-1 rounded text-sm font-bold text-gray-700 shadow-sm whitespace-nowrap min-w-[110px] text-center">
        {label}
      </span>
      <span className="text-gray-900 font-medium break-all mt-1 text-sm">
        {value || "-"}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-white">
      <aside className="w-64 bg-[#FFFDF5] border-r border-gray-100 flex flex-col items-center py-8 px-4 hidden md:flex">
        <div className="mb-10">
          <UplersBrand size="w-28" textSize="text-2xl" />
        </div>
        <div className="w-full bg-[#FCDC3B] text-gray-900 font-bold text-center py-3 rounded-lg shadow-sm cursor-pointer">
          Dashboard
        </div>
      </aside>

      <main className="flex-1 p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Submission</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.id} className="bg-[#FFF7D1] p-6 rounded-2xl shadow-sm flex flex-col gap-4 relative group">
                
                <InfoRow label="Full Name" value={item.name} />
                <InfoRow label="Phone" value={item.phone} />
                <InfoRow label="Email" value={item.email} />
                <InfoRow label="Additional info" value={item.notes} />
                <InfoRow label="Roles" value={item.role} />
                
                {/* New Fields from your Design */}
                <InfoRow label="Budget" value={item.budget} />
                <InfoRow label="Talents" value={item.talents} />
                <InfoRow label="Persona" value={item.persona} />

                <div className="mt-4 pt-4 border-t border-yellow-200 flex justify-end gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => navigate(`/edit/${item.id}`)} className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-semibold">
                    <FaEdit /> Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm font-semibold">
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}