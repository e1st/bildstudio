import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAboutUs } from "../hooks/useAboutUs";
import { AboutUtil } from "../utils/AboutUtil";
import { PageHeading } from "../components/PageHeading";

const ServiceItem = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${(props) => (props.isActive ? "#dadada" : "#efefef")};
  color: ${(props) => (props.isActive ? "#737373" : "#8a8888")};

  &:hover {
    background-color: #dadada;
    color: #737373;

    h4,
    svg {
      transition: color 0.2s;
      color: ${(props) => (props.isActive ? "#737373" : "#8a8888")};
    }
  }

  h4 {
    margin: 10px 0;
  }
`;
const ServiceItemHeading = styled.h4`
  margin-bottom: 15px;
`;
const ServiceContent = styled.div`
  padding: 20px 0;
`;
const ContentHeading = styled.h2`
  margin-bottom: 16px;
`;
const AboutUsImage = styled.img`
  width: 100%;
`;

const About = () => {
  const [tab, setTab] = useState(0);
  const [data, isLoaded] = useAboutUs();

  const tabOnClickHandler = (index) => {
    setTab(index);
  };

  return (
    <>
      <PageHeading title="About my Bussines" />

      <div className="container">
        <section className="row">
          <div className="col-xs-12 col-lg-4">
            {!isLoaded ? (
              "Loading.."
            ) : (
              <AboutUsImage src={data?.main?.image} alt="About Us" />
            )}
          </div>
          <div className="col-xs-12 col-lg-8">
            <p>{!isLoaded ? "Loading.." : data?.main?.content ?? null}</p>
          </div>
        </section>
        <section className="row">
          <div className="col-xs-12 col-lg-6">
            <ContentHeading>Mission Statement</ContentHeading>
            <p>{!isLoaded ? "Loading.." : data?.mission?.content ?? null}</p>
          </div>
          <div className="col-xs-12 col-lg-6">
            <ContentHeading>Fun Facts</ContentHeading>
            <p>{!isLoaded ? "Loading.." : data?.funFacts?.content ?? null}</p>
          </div>
        </section>
        <section className="row">
          <div className="col-xs-12">
            <h2>Servcies</h2>
          </div>
        </section>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#efefef" }}>
        <div className="container">
          <div className="row center-xs">
            {!isLoaded
              ? "Loading.."
              : data?.services &&
                data?.services?.length > 0 &&
                data?.services.map((service, index) => {
                  return (
                    <ServiceItem
                      key={index}
                      className="col-xs-12 col-lg-3"
                      isActive={tab === index ? true : false}
                      onClick={() => tabOnClickHandler(index)}
                    >
                      {AboutUtil.getServiceMappings()[service?.name]?.icon && (
                        <FontAwesomeIcon
                          icon={
                            AboutUtil.getServiceMappings()[service?.name]
                              ?.icon ?? null
                          }
                          size="2x"
                        />
                      )}

                      <ServiceItemHeading className="text-uppercase">
                        {service?.name ?? null}
                      </ServiceItemHeading>
                    </ServiceItem>
                  );
                })}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {!isLoaded
              ? "Loading.."
              : data?.services &&
                data?.services?.length > 0 &&
                data?.services.map((service, index) => {
                  return (
                    tab === index && (
                      <ServiceContent key={index}>
                        <p>{service.content ?? null}</p>
                      </ServiceContent>
                    )
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
