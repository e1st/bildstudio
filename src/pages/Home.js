import "../assets/css/slick-slider.css";
import "../assets/css/react-modal.css";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";
import { Lightbox } from "react-modal-image";
import { ModalStyles } from "../styles/Modal";
import { AppConfig } from "../config/AppConfig";
import { SliderUtil } from "../utils/SliderUtil";
import { useProjects } from "../hooks/useProjects";
import { Slider } from "../components/Slider";
import { Introduction } from "../components/Introduction";
import { FeaturedProjects } from "../components/FeaturedProjects";

Modal.setAppElement("#root");

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [projects, isLoaded] = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setSlides(SliderUtil.getSlider());
  }, []);

  const projectOnClickHandler = (project) => {
    if (project) {
      setSelectedProject(project);
    }
  };

  const modalOnClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Slider slides={slides} />

      <section
        className="container-fluid"
        style={{ backgroundColor: "#efefef" }}
      >
        <div className="row">
          <Introduction
            introductionVideoHandler={() => {
              setModalIsOpen(true);
            }}
          />
        </div>
      </section>

      <FeaturedProjects
        isLoaded={isLoaded}
        projects={projects}
        selectedProject={(project) => {
          projectOnClickHandler(project);
        }}
      />

      {selectedProject && (
        <Lightbox
          small={selectedProject?.image?.large}
          large={selectedProject?.image?.large}
          alt={selectedProject?.title ?? null}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={modalOnClose}
        style={ModalStyles}
        contentLabel="Youtube Player"
      >
        <YouTube videoId={AppConfig.youtubeVideoId} />
      </Modal>
    </>
  );
};

export default Home;
