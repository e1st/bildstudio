import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Shortcut } from "./components/Shortcut";

export default function App() {
  return (
    <>
      <header className="container">
        <div className="row middle-md center-md">
          <Header />
        </div>
        <div className="row">
          <Navigation />
        </div>
      </header>

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <section
        className="container-fluid"
        style={{ backgroundColor: "#322f2f" }}
      >
        <div className="row">
          <Shortcut />
        </div>
      </section>

      <footer className="container">
        <div className="row middle-xs">
          <Footer />
        </div>
      </footer>
    </>
  );
}
