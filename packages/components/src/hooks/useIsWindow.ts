// import { useBreakpoints } from "./useBreakpoint";
// import { ResponsiveDeviceTypes } from "@heather-turano-coaching/design-system/configs/responsive.config";

// type Operators = "lessThan" | "greaterThan";
// type Extenders = "equalTo";
// type Conjunctions = "and" | "or";

// export const useIsWindow = () => {
//   const [windowWidth, deviceTypes] = useBreakpoints();

//   const isWindow: {
//     [key in Operators]: {
//       [key in Conjunctions | ResponsiveDeviceTypes]: {
//         [key in Extenders & Operators]: {
//           [key in ResponsiveDeviceTypes]: boolean;
//         };
//       };
//     };
//   } = {
//     greaterThan: {
//       or: {
//         equalTo: {
//           phone: windowWidth >= deviceTypes.phone,
//           phoneMd: windowWidth >= deviceTypes.phoneMd,
//           phoneLg: windowWidth >= deviceTypes.phoneLg,
//           tabletPortrait: windowWidth >= deviceTypes.tabletPortrait,
//           tabletLandscape: windowWidth >= deviceTypes.tabletLandscape,
//           laptop: windowWidth >= deviceTypes.laptop,
//           desktop: windowWidth >= deviceTypes.desktop,
//           "4K": windowWidth >= deviceTypes["4K"]
//         }
//       },
//       and: {
//         lessThan: {
//           phone: windowWidth >= deviceTypes.phone,
//           phoneMd: windowWidth >= deviceTypes.phoneMd,
//           phoneLg: windowWidth >= deviceTypes.phoneLg,
//           tabletPortrait: windowWidth >= deviceTypes.tabletPortrait,
//           tabletLandscape: windowWidth >= deviceTypes.tabletLandscape,
//           laptop: windowWidth >= deviceTypes.laptop,
//           desktop: windowWidth >= deviceTypes.desktop,
//           "4K": windowWidth >= deviceTypes["4K"]
//         }
//       },
//       phone: true,
//       phoneMd: true,
//       phoneLg: true,
//       tabletPortrait: true,
//       tabletLandscape: true,
//       laptop: true,
//       desktop: true,
//       "4K": true
//     },
//     lessThan: {
//       or: {
//         equalTo: {
//           phone: true,
//           phoneMd: true,
//           phoneLg: true,
//           tabletPortrait: true,
//           tabletLandscape: true,
//           laptop: true,
//           desktop: true,
//           "4K": true
//         }
//       },
//       and: {
//         greaterThan: {
//           phone: true,
//           phoneMd: true,
//           phoneLg: true,
//           tabletPortrait: true,
//           tabletLandscape: true,
//           laptop: true,
//           desktop: true,
//           "4K": true
//         }
//       },
//       phone: true,
//       phoneMd: true,
//       phoneLg: true,
//       tabletPortrait: true,
//       tabletLandscape: true,
//       laptop: true,
//       desktop: true,
//       "4K": true
//     }
//   };

//   return isWindow;
// };
