import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Lightbox } from "react-modal-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContainerGap as gap } from "../styles/Gap";
import { PageHeading } from "../components/PageHeading";
import { Layout } from "../enums/Layout";
import { Filter } from "../enums/Filter";
import { ProjectsConfig } from "../config/ProjectsConfig";
import { useProjects } from "../hooks/useProjects";
import { Project } from "../components/Project";

const ProjectsFilterWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const ProjectFilter = styled.li`
  margin-right: 16px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }

  &:last-child {
    margin: 0;
  }
`;
const ProjectsLayoutWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    justify-content: center;
    display: none;
  }
`;
const ProjectsLayout = styled.li`
  margin-right: 6px;

  &:last-child {
    margin: 0;
  }
`;
const ProjectFilterButton = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  text-transform: capitalize;
  font-size: 16px;
  color: ${(props) => (props.isActive ? "#2ecc71" : "#8a8888")};

  &:hover {
    color: #2ecc71;
  }
`;
const ProjectTools = styled.div`
  margin-bottom: 25px;
`;
const ProjectContainer = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
const NoResultsContent = styled.h2`
  text-align: center;
`;
const HeartContainer = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 15px;
  }
`;
const HeartIcon = styled.span`
  color: #ff4033;
`;

const Work = () => {
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(ProjectsConfig.projectsLimitPerScroll);
  const [filters, setFilers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [layout, setLayout] = useState(ProjectsConfig.layout);
  const [projects, isLoaded] = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [data, setData] = useState(projects);

  const filterOnClickHandler = (filter) => setSelectedFilter(filter);

  const layoutOnClickHandler = (layout) => setLayout(layout);

  const onScrollHandler = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement.scrollHeight
    ) {
      setPage((prev) => {
        return prev + 1;
      });
    }
  }, []);

  useEffect(() => {
    const collections = [
      ...new Set(
        projects && projects.length > 0
          ? projects.map((project) => project.collection)
          : []
      ),
    ];

    setFilers(collections);
  }, [projects]);

  useEffect(() => {
    setData(projects);
  }, [projects]);

  // TODO: use intersection observer
  useEffect(() => {
    window.removeEventListener("scroll", onScrollHandler);
    window.addEventListener("scroll", onScrollHandler, { passive: true });

    return () => window.removeEventListener("scroll", onScrollHandler);
  }, [onScrollHandler]);

  useEffect(() => {
    const offset = page * ProjectsConfig.projectsLimitPerScroll;

    setLimit(offset);
  }, [page]);

  useEffect(() => {
    const hasMore =
      limit - ProjectsConfig.projectsLimitPerScroll > projects.length;

    setHasMore(!hasMore);
  }, [limit, projects.length, data.length]);

  useEffect(() => {
    if (selectedFilter === Filter.ALL) {
      setData(projects);
      return;
    }

    const filteredData = projects.filter((project) => {
      return project.collection === selectedFilter;
    });

    setData(filteredData);
  }, [selectedFilter, projects]);

  return (
    <>
      <PageHeading title="Check Out What I Can Do" />

      <div className="container" style={gap}>
        <ProjectTools className="row">
          <div className="col-xs-12 col-lg-10">
            <ProjectsFilterWrapper>
              <ProjectFilter>
                <ProjectFilterButton
                  isActive={selectedFilter === Filter.ALL}
                  type="button"
                  onClick={() => filterOnClickHandler("all")}
                >
                  All
                </ProjectFilterButton>
              </ProjectFilter>

              {filters &&
                filters.length > 0 &&
                filters.map((category, index) => {
                  if (category) {
                    return (
                      <ProjectFilter key={index}>
                        <ProjectFilterButton
                          isActive={selectedFilter === category}
                          type="button"
                          onClick={() => filterOnClickHandler(category)}
                        >
                          {category ?? null}
                        </ProjectFilterButton>
                      </ProjectFilter>
                    );
                  }
                })}

              <ProjectFilter>
                <ProjectFilterButton
                  isActive={selectedFilter === Filter.TEST}
                  type="button"
                  onClick={() => filterOnClickHandler("test")}
                >
                  Test
                </ProjectFilterButton>
              </ProjectFilter>
            </ProjectsFilterWrapper>
          </div>
          <div className="col-xs-12 col-lg-2">
            <ProjectsLayoutWrapper>
              <ProjectsLayout>
                <ProjectFilterButton
                  isActive={layout === Layout.GRID}
                  type="button"
                  onClick={() => layoutOnClickHandler("grid")}
                >
                  <FontAwesomeIcon icon="border-all" size="1x" />
                </ProjectFilterButton>
              </ProjectsLayout>
              <ProjectsLayout>
                <ProjectFilterButton
                  isActive={layout === Layout.LIST}
                  type="button"
                  onClick={() => layoutOnClickHandler("list")}
                >
                  <FontAwesomeIcon icon="bars" size="1x" />
                </ProjectFilterButton>
              </ProjectsLayout>
            </ProjectsLayoutWrapper>
          </div>
        </ProjectTools>

        <div className="row">
          {!isLoaded ? (
            "Loading.."
          ) : data.length === 0 ? (
            <div className="col-xs-12">
              <NoResultsContent>No results.</NoResultsContent>
            </div>
          ) : (
            data.slice(0, limit).map((project) => {
              return layout === Layout.GRID ? (
                <ProjectContainer
                  className="col-xs-12 col-lg-4"
                  key={project?.id}
                >
                  <Project
                    project={project}
                    selectedProject={(project) => setSelectedProject(project)}
                  />
                </ProjectContainer>
              ) : layout === Layout.LIST ? (
                <ProjectContainer
                  className="col-xs-12 col-lg-12"
                  key={project?.id}
                >
                  <Project
                    project={project}
                    selectedProject={(project) => setSelectedProject(project)}
                  />
                </ProjectContainer>
              ) : null;
            })
          )}

          {!hasMore && data?.length > projects?.length - 1 && (
            <HeartContainer className="col-xs-12 center-xs">
              <HeartIcon>
                <FontAwesomeIcon icon="heart" size="2x" />
              </HeartIcon>
            </HeartContainer>
          )}
        </div>
      </div>

      {selectedProject && (
        <Lightbox
          small={selectedProject?.image?.large}
          large={selectedProject?.image?.large}
          alt={selectedProject?.title ?? null}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Work;
