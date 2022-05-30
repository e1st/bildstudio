import appleMacbookImage from "../assets/images/slider/apple-macbook.svg";
import appleIpadImage from "../assets/images/slider/apple-ipad.svg";
import appleIphoneImage from "../assets/images/slider/apple-iphone.svg";

export class SliderUtil {
  static getSlider() {
    return [
      {
        name: "Apple Macbook",
        image: appleMacbookImage,
        device: "macbook",
        sizes: {
          width: "625",
          height: "",
        },
      },
      {
        name: "Apple Ipad",
        image: appleIpadImage,
        device: "ipad",
        sizes: {
          width: "325",
          height: "",
        },
      },
      {
        name: "Apple Iphone",
        image: appleIphoneImage,
        device: "iphone",
        sizes: {
          width: "125",
          height: "",
        },
      },
    ];
  }
}
