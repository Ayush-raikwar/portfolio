import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import Home from "../pages/Home"
import About from "../pages/About"
import Projects from "../pages/Projects"
import { Resume } from "../pages/Resume"
import Contact from "../pages/Contact"

export const NavigationRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}