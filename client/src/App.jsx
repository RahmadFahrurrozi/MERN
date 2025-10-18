import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResumeBuilderPage from "./pages/ResumeBuilderPage";
import Preview from "./pages/Preview";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<Layout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="builder/id:resumeid" element={<ResumeBuilderPage />} />
        </Route>
        <Route path="preview/:reusmeid" element={<Preview />} />
      </Routes>
    </>
  );
};

export default App;
