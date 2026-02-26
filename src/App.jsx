import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

import { AuthProvider } from "./app/context/AuthContext";
import ProtectedRoute from "./app/routes/ProtectectionRoute";

import Login from "./app/pages/login";
import AdminLayout from "./app/layouts/AdminLayout";
import ClientLayout from "./app/layouts/ClientLayout";

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("https://localhost:7274/api/Tickets");
        const data = await res.json();
        setTickets(data);
      } catch (e) {
        console.error("Erreur API:", e);
      }
    };

    load();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/Agent/*"
            element={
              <ProtectedRoute role="agent">
                <AdminLayout tickets={tickets} setTickets={setTickets} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Client/*"
            element={
              <ProtectedRoute role="client">
                <ClientLayout tickets={tickets} setTickets={setTickets} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
