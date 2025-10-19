import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Preview from "./pages/Preview";
import Layout from "./pages/Layout";
import ResumeBuilder from "./pages/ResumeBuilder";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="resume-builder/:resumeid" element={<ResumeBuilder />} />
        </Route>
        <Route path="preview/:reusmeid" element={<Preview />} />
      </Routes>
    </>
  );
};

export default App;
