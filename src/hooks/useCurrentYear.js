import { DateUtil } from "../utils/DateUtil";

export const useCurrentYear = () => {
  return [DateUtil.getFullYear()];
};
