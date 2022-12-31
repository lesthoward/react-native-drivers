/// <reference types="nativewind/types" />

// Type svg to be a string
declare module '*.svg' {
  const content: string;
  export default content;
}