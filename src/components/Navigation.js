import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavigationUtil } from "../utils/NavigationUtil";

const NavigationContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 51;
  border-top: 1px solid #efefef;
  padding-top: 20px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;
const NavigationItem = styled.li`
  list-style: none;
  width: 80px;

  a {
    color: ${(props) => (props.active ? "#2ecc71" : "#737373")};
    text-decoration: none;
    transition: color 0.2s;
    font-size: 18px;

    &.active {
      color: #2ecc71;
    }

    &:hover {
      color: #2ecc71;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    text-align: center;

    &:last-child {
      margin: 0;
    }
  }
`;

export const Navigation = () => {
  return (
    <nav className="col-xs-12">
      <NavigationContainer>
        {NavigationUtil.getNavigation().map((navigation, index) => {
          return (
            <NavigationItem key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={navigation?.path}
              >
                {navigation?.name}
              </NavLink>
            </NavigationItem>
          );
        })}
      </NavigationContainer>
    </nav>
  );
};
