import "./App.css";
import AccountPage from "./account/Accountpage";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CommentPage from "./comment/CommentPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./components/footer/Footer";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
        <Routes>
          <Route path="/account-page" element={<AccountPage />} />
          <Route path="/comment-page" element={<CommentPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
