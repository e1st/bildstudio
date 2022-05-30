import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useCurrentYear } from "../hooks/useCurrentYear";
import { NavigationUtil } from "../utils/NavigationUtil";
import { AppConfig } from "../config/AppConfig";

const FooterCopyright = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  color: #a5a5a5;
`;
const FooterNavigation = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;
const FooterNavigationItem = styled.li`
  margin: 0 5px;

  &:after {
    content: "/";
    margin-left: 10px;
  }

  &:last-child {
    margin: 0;

    &:after {
      content: "";
      margin: 0;
    }
  }

  a {
    color: #a5a5a5;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s;
    font-size: 12px;
    color: #a5a5a5;

    &.active {
      color: #322f2f;
    }

    &:hover {
      color: #322f2f;
    }
  }
`;

export const Footer = () => {
  const [year] = useCurrentYear();

  return (
    <>
      <FooterCopyright className="col-xs-12 col-lg-4 col-md-4 center-xs start-md">
        Copyright {year} {AppConfig.fullName}. All Rights Reserved.
      </FooterCopyright>
      <FooterNavigation className="col-xs-12 col-lg-8 end-lg col-md-8 end-xs">
        {NavigationUtil.getNavigation().map((navigation, index) => {
          return (
            <FooterNavigationItem key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={navigation?.path}
              >
                {navigation?.name}
              </NavLink>
            </FooterNavigationItem>
          );
        })}
      </FooterNavigation>
    </>
  );
};
