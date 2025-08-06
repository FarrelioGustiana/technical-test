import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/login/", { username, password });
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      navigate("/");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.detail ||
          "Login gagal. Username atau password salah."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-neutral-50 text-neutral-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/90 rounded-xl shadow p-8 border border-neutral-100 flex flex-col gap-6"
      >
        <h1 className="text-2xl font-semibold mb-2 text-center">Login</h1>
        {error && <div className="text-red-600 text-sm mb-2 text-center">{error}</div>}
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Username</span>
          <input
            type="text"
            className="border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400 bg-neutral-50"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            className="border border-neutral-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400 bg-neutral-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-neutral-900 text-white rounded px-6 py-2 font-semibold shadow hover:bg-neutral-700 transition-colors disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Memproses..." : "Login"}
        </button>
        <div className="text-center text-sm text-neutral-600">
          Belum punya akun? <a href="/register" className="underline hover:text-neutral-900">Daftar</a>
        </div>
      </form>
    </main>
  );
}
