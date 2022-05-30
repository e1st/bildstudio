import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFoundContainer = styled.div`
  height: 50vh;
`;
const NotFoundElements = styled.div`
  svg {
    margin-bottom: 20px;
  }
`;

const NotFound = () => {
  return (
    <div className="container">
      <NotFoundContainer className="row center-xs middle-xs">
        <div className="col-xs-12">
          <NotFoundElements>
            <FontAwesomeIcon icon="face-frown" size="5x" />
            <h2>404</h2>
            <h4>Not Found!</h4>
          </NotFoundElements>
        </div>
      </NotFoundContainer>
    </div>
  );
};

export default NotFound;
