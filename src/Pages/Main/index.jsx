import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";

const DashboardLayout = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default DashboardLayout;
