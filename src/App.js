import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/pages/Contact/Contact";
import Admission from "./components/pages/Admission/Admission";
import Blog from "./components/pages/Blog/Blog";
import Notice from "./components/pages/Notice/Notice";
import About from "./components/pages/About/About";
import AllTeachers from "./components/Teachers/AllTeachers";
import TeacherDetails from "./components/Teachers/TeacherDetails/TeacherDetails";
import PhotoGallery from "./components/Gallery/PhotoGallery/PhotoGallery";
import EnglishAndBGS from "./components/pages/Departments/EnglishAndBGS/EnglishAndBGS";
import MathAndScience from "./components/pages/Departments/MathAndScience/MathAndScience";
import IslamicStudies from "./components/pages/Departments/IslamicStudies/IslamicStudies";
import Bangla from "./components/pages/Departments/Bangla/Bangla";
import Career from "./components/pages/Career/Career";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/teachers" element={<AllTeachers />} />
      <Route path="/teachers/:id" element={<TeacherDetails />} />
      <Route path="/photo-gallery" element={<PhotoGallery />} />
      <Route path="/english-bgs" element={<EnglishAndBGS />} />
      <Route path="/math-science" element={<MathAndScience />} />
      <Route path="/islamic-studies" element={<IslamicStudies />} />
      <Route path="/bangla" element={<Bangla />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  );
}

export default App;
