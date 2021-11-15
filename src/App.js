import "./App.css";
import AccountPage from "./account/Accountpage";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CommentPage from "./comment/CommentPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Navbar />
          <Route path="/account-page" element={<AccountPage />} />
          <Route path="/comment-page" element={<CommentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
