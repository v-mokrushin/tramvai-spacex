/// <reference types="@tramvai/cli" />
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
