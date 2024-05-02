import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/pages/Contact/Contact";
import Academic from "./components/pages/Academic/Academic";
import Admission from "./components/pages/Admission/Admission";
import Blog from "./components/pages/Blog/Blog";
import Notice from "./components/pages/Notice/Notice";
import About from "./components/pages/About/About";
import AllTeachers from "./components/Teachers/AllTeachers";
import TeacherDetails from "./components/Teachers/TeacherDetails/TeacherDetails";
import PhotoGallery from "./components/Gallery/PhotoGallery/PhotoGallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academic" element={<Academic />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/teachers" element={<AllTeachers />} />
      <Route path="/teachers/:id" element={<TeacherDetails />} />
      <Route path="/photo-gallery" element={<PhotoGallery />} />
    </Routes>
  );
}

export default App;
