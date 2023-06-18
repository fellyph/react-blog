import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      background: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
  }
}