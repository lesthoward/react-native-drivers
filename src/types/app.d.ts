/// <reference types="nativewind/types" />

// Type svg to be a string
declare module '*.svg' {
  const content: string;
  export default content;
}

// declare module "*.svg" {
//   import React from 'react';
//   import { SvgProps } from "react-native-svg";
//   const content: React.FC<SvgProps>;
//   export default content;
// }