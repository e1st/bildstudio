import styled from "styled-components";
import { Link } from "react-router-dom";

const ShortcutHeading = styled.h1`
  color: #fff;
  text-transform: capitalize;
  font-size: 24px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding-bottom: 10px;
  }
`;
const ShortcutClickToAction = styled(Link)`
  background: #2ecc71;
  color: #fff;
  text-decoration: none;
  height: 40px;
  text-transform: uppercase;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  &:hover {
    background: #21b35f;
  }
`;

export const Shortcut = () => {
  return (
    <div className="container">
      <div className="row middle-xs">
        <div className="col-xs-12 col-md-10 col-lg-10">
          <ShortcutHeading>Are You Ready To Be Blown Away?</ShortcutHeading>
        </div>
        <div className="col-xs-12 col-md-2 col-lg-2">
          <ShortcutClickToAction to="/about">
            Click Here to Find Out
          </ShortcutClickToAction>
        </div>
      </div>
    </div>
  );
};
