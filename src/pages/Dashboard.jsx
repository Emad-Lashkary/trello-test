import { Navigate } from "react-router-dom";
import ListsTable from "../lists/ListsTable";
import Header from "../ui/Header";

function Dashboard() {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  // route protecting
  if (!email || !password) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <ListsTable />
    </>
  );
}

export default Dashboard;
