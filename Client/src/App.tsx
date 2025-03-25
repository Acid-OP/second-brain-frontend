import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/Home";
import { SharePage } from "./pages/SharePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Serve Home at root */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> {/* Optional: keep /home too */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/brain/:shareLink" element={<SharePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;