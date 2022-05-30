import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectContainer = styled.div``;
const ProjectImage = styled.img`
  width: 100%;
}`;

const ProjectLinkIcon = styled.div`
  background: #2ecc71;
  color: #fff;
  border-radius: 100%;
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -48px;
  margin-top: -48px;
  cursor: pointer;
  z-index: 6;
  opacity: 0;
  transition: opacity 0.2s;
`;
const ProjectWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:after {
    background: #000;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover {
    &:after {
      opacity: 0.7;
    }

    div {
      opacity: 1;
    }
  }
`;

export const Project = ({ project, selectedProject }) => {
  return (
    <ProjectContainer
      onClick={() => {
        selectedProject(project);
      }}
    >
      <ProjectWrapper>
        <ProjectLinkIcon>
          <FontAwesomeIcon icon="link" size="3x" />
        </ProjectLinkIcon>

        {project?.image && project?.image?.large && (
          <ProjectImage
            src={project?.image.large}
            alt={project?.title ?? null}
          />
        )}
      </ProjectWrapper>
    </ProjectContainer>
  );
};
