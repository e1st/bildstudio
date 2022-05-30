import styled from "styled-components";
import { ContainerGap as gap } from "../styles/Gap";

const PageHeadingContent = styled.h2`
  color: #fff;
  font-weight: 600;
  text-transform: capitalize;
`;

export const PageHeading = ({ title }) => {
  return (
    <section className="container-fluid" style={{ backgroundColor: "#2ecc71" }}>
      <div className="row">
        <div className="container">
          <div className="row center-xs start-lg">
            <div className="col-xs-12">
              <PageHeadingContent>{title ?? null}</PageHeadingContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
