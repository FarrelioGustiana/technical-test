import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const refresh = localStorage.getItem("refresh");
    if (refresh) {
      try {
        await api.post("/logout/", { refresh });
      } catch (err) {
        console.log(err);
      }
    }
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className={
        "cursor-pointer px-3 py-1 rounded bg-neutral-200 text-neutral-800 hover:bg-neutral-300 transition-colors text-sm font-medium"
      }
    >
      Logout
    </button>
  );
}
