import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
