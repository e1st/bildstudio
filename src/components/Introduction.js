import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IntroductionVideo = styled.div``;
const IntroductionVideoPlaceholder = styled.div`
  background: #f39c12;
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IntroductionVideoPlayIcon = styled.div`
  color: #fff;
  opacity: 0.3;
  transition: opacity 0.2s;
  cursor: pointer;
  width: 60px;
  height: 80px;

  &:hover {
    opacity: 1;
  }
`;
const IntroductionText = styled.div``;
const IntroductionTextHeading = styled.h1`
  margin: 0;
  padding: 0;
  color: #737373;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  padding-bottom: 30px;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
  }
`;
const IntroductionTextParagraph = styled.p`
  margin: 0;
  padding: 0;
  color: #737373;
  font-size: 14px;
  line-height: 1.5;
`;

export const Introduction = ({ introductionVideoHandler }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <IntroductionVideo>
            <IntroductionVideoPlaceholder>
              <IntroductionVideoPlayIcon onClick={introductionVideoHandler}>
                <FontAwesomeIcon icon="play" size="5x" />
              </IntroductionVideoPlayIcon>
            </IntroductionVideoPlaceholder>
          </IntroductionVideo>
        </div>
        <div className="col-xs-12 col-md-8">
          <IntroductionText>
            <IntroductionTextHeading>
              Get To Know Us a Little Better!
            </IntroductionTextHeading>
            <IntroductionTextParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
              faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
              mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
              congue ut, luctus a nulla. Donec sit amet sapien neque, id
              ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
              elit congue lacinia.
              <br />
              <br />
              Nullam tellus turpis, fringilla sit amet congue ut, luctus a
              nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla
              facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
            </IntroductionTextParagraph>
          </IntroductionText>
        </div>
      </div>
    </div>
  );
};
