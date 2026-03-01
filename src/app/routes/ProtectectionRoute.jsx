import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectectionRoute({ children, role }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/Login" />;

  if (role && user.role !== role) return <Navigate to="/Login" />;

  return children;
}
