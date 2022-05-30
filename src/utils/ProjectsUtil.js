export class ProjectsUtil {
  static getSlickSliderSettings() {
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
  }

  static getFilters() {
    return [
      { name: "Print" },
      { name: "Photography" },
      { name: "Website" },
      { name: "Applications" },
    ];
  }
}
