import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialUtil } from "../utils/SocialUtil";
import { IconType } from "../enums/IconType";
import { AppConfig } from "../config/AppConfig";

const BrandContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const BrandSymbol = styled.h1`
  background: #737373;
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  margin-right: 10px;
`;
const BrandSlogan = styled.h2`
  color: #737373;
  font-weight: 500;
`;
const Socials = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  text-align: right;

  @media screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;
const SocialLinkItem = styled.a`
  color: #dadada;
  border: 3px solid #dadada;
  margin-right: 10px;
  border-radius: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.2s, color 0.2s;

  &:last-child {
    margin: 0;
  }

  &:hover {
    &:nth-child(1) {
      color: #1da1f2;
      border-color: #1da1f2;
    }

    &:nth-child(2) {
      color: #4267b2;
      border-color: #4267b2;
    }

    &:nth-child(3) {
      color: #ee802f;
      border-color: #ee802f;
    }

    &:nth-child(4) {
      color: #e60023;
      border-color: #e60023;
    }

    &:nth-child(5) {
      color: #0f9d58;
      border-color: #0f9d58;
    }

    &:nth-child(6) {
      color: #ea4c89;
      border-color: #ea4c89;
    }
  }
`;

export const Header = () => {
  return (
    <>
      <div className="col-xs-12 col-lg-4 col-md-4">
        <BrandContainer>
          <BrandSymbol>{AppConfig?.shortName}</BrandSymbol>
          <BrandSlogan>{AppConfig?.fullName}</BrandSlogan>
        </BrandContainer>
      </div>
      <div className="col-xs-12 col-lg-8 col-md-4">
        <Socials>
          {SocialUtil.getSocials().map((social, index) => {
            return social?.icon && social?.icon.type === IconType.BRAND ? (
              <SocialLinkItem key={index} href={social?.url} target="_blank">
                <FontAwesomeIcon icon={["fab", social?.icon?.name]} />
              </SocialLinkItem>
            ) : social?.icon && social?.icon.type === IconType.VENDOR ? (
              <SocialLinkItem key={index} href={social?.url} target="_blank">
                <FontAwesomeIcon icon={social?.icon?.name} />
              </SocialLinkItem>
            ) : (
              <></>
            );
          })}
        </Socials>
      </div>
    </>
  );
};
