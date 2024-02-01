import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import { Tenor } from "./Other";

const DashboardLayout = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tenor" element={<Tenor />} />
      </Route>
    </Routes>
  );
};

export default DashboardLayout;
