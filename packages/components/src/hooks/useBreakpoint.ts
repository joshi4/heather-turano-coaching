import { useState, useEffect } from "react";

import {
  ResponsiveBreakpoints,
  responsiveBreakpoints
} from "@heather-turano-coaching/design-system/configs";

export const useBreakpoints = (
  userDefinedBreakpoints?: ResponsiveBreakpoints
): [number, ResponsiveBreakpoints] => {
  const mediaBreakpoints = userDefinedBreakpoints || responsiveBreakpoints;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = (): void => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return [windowWidth, mediaBreakpoints];
};
