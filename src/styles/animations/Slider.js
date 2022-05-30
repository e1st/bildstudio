import { keyframes } from "styled-components";

export const MacbookAnimation = keyframes`
  0% { 
    transform: translateY(60px);
  }

  50% { 
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 1;
    transform: translateX(-50px)
  }
`;
export const IpadAnimation = keyframes`
  0% { 
    transform: translateY(60px);
  }

  50% {
    opacity: 1; 
    transform: translateY(0);
  }

  100% { 
    opacity: 1; 
    transform: translateX(160px)
  }
`;
export const IphoneAnimation = keyframes`
  0% { 
    transform: translateY(60px);
  }

  50% {
    opacity: 1; 
    transform: translateY(0);
  }

  100% { 
    opacity: 1;
    transform: translateX(245px)
  }
`;
export const FadeInSliderHeading = keyframes`
  100% {
    opacity: 1;
  }
`;
export const FadeInSliderButton = keyframes`
  100% {
    opacity: 1;
  }
`;
