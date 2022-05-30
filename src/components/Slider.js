import styled from "styled-components";
import { SliderDevice } from "../enums/SliderDevice";
import { Link } from "react-router-dom";

import {
  MacbookAnimation,
  IpadAnimation,
  IphoneAnimation,
  FadeInSliderHeading,
  FadeInSliderButton,
} from "../styles/animations/Slider";

const SliderGrid = styled.div`
  background: linear-gradient(
    to bottom,
    #2ecc71 0%,
    #2ecc71 50%,
    #fefefe 50%,
    #fefefe 100%
  );
`;
const SliderWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SliderDevices = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
const SliderDeviceItem = styled.div`
  position: absolute;
`;
const SliderMacbookDevice = styled.img`
  opacity: 0;
  transition: opacity, transform;
  animation-name: ${MacbookAnimation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  min-width: 625px;
`;
const SliderIpadDevice = styled.img`
  opacity: 0;
  transition: opacity, transform;
  animation-name: ${IpadAnimation};
  animation-duration: 0.8s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  min-width: 325px;
`;
const SliderIphoneDevice = styled.img`
  opacity: 0;
  transition: opacity, transform;
  animation-name: ${IphoneAnimation};
  animation-duration: 0.8s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  min-width: 125px;
`;
const SliderContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
`;
const SliderContentHeading = styled.h3`
  font-weight: 500;
  color: #8a8888;
  font-size: 24px;
  opacity: 0;
  transition: opacity 0.2s;
  animation-name: ${FadeInSliderHeading};
  animation-delay: 1s;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`;
const SliderClickToAction = styled(Link)`
  background: #2ecc71;
  color: #fff;
  text-decoration: none;
  width: 220px;
  height: 40px;
  text-transform: uppercase;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: background 0.2s, opacity 0.2s;
  animation-name: ${FadeInSliderButton};
  animation-delay: 1.3s;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;

  &:hover {
    background: #21b35f;
  }
`;

export const Slider = ({ slides }) => {
  return (
    <SliderGrid className="container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <SliderWrapper>
            <SliderDevices>
              {slides &&
                slides.length > 0 &&
                slides.map((slide, index) => {
                  return (
                    <SliderDeviceItem key={index}>
                      {slide?.device === SliderDevice.MACBOOK ? (
                        <SliderMacbookDevice
                          src={slide?.image ?? ""}
                          alt={slide?.title ?? null}
                          width={slide?.sizes?.width ?? null}
                        />
                      ) : slide?.device === SliderDevice.IPAD ? (
                        <SliderIpadDevice
                          src={slide?.image ?? ""}
                          alt={slide?.title ?? null}
                          width={slide?.sizes?.width ?? null}
                        />
                      ) : slide?.device === SliderDevice.IPHONE ? (
                        <SliderIphoneDevice
                          src={slide?.image ?? ""}
                          alt={slide?.title ?? null}
                          width={slide?.sizes?.width ?? null}
                        />
                      ) : null}
                    </SliderDeviceItem>
                  );
                })}
            </SliderDevices>
            <SliderContent>
              <SliderContentHeading>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu eratiuy lacus, vel congue mauris. Fusce
                velitaria justo, faucibus eu.
              </SliderContentHeading>

              <SliderClickToAction to="/work">
                Click Here to Find Out
              </SliderClickToAction>
            </SliderContent>
          </SliderWrapper>
        </div>
      </div>
    </SliderGrid>
  );
};
