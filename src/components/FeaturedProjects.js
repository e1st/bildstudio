import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import { ProjectsUtil } from "../utils/ProjectsUtil";
import { ProjectsConfig } from "../config/ProjectsConfig";
import { Project } from "./Project";

const FeaturedProjectsGrid = styled.div`
  text-align: center;
  margin: 50px 0 80px;
`;
const FeaturedProjectsHeading = styled.h1`
  padding-bottom: 30px;
  font-weight: 500;
  color: #8a8888;
  font-size: 24px;
`;
const FeaturedProjectsParagraph = styled.p`
  color: #8a8888;
  padding-bottom: 30px;
  line-height: 1.5;
`;

export const FeaturedProjects = ({ projects, selectedProject, isLoaded }) => {
  return (
    <>
      <FeaturedProjectsGrid>
        <div className="container">
          <div className="row">
            <FeaturedProjectsHeading>
              A couple of our featured projects
            </FeaturedProjectsHeading>
            <FeaturedProjectsParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
              faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
              mi, quis tincidunt eros.
            </FeaturedProjectsParagraph>
          </div>
        </div>
        {!isLoaded ? (
          "Loading.."
        ) : (
          <Slider {...ProjectsUtil.getSlickSliderSettings()}>
            {projects &&
              projects.length > 0 &&
              projects
                .slice(0, ProjectsConfig.featuredProjectsLimit)
                .map((project) => {
                  return (
                    <Project
                      key={project?.id}
                      project={project}
                      selectedProject={selectedProject}
                    />
                  );
                })}
          </Slider>
        )}
      </FeaturedProjectsGrid>
    </>
  );
};
