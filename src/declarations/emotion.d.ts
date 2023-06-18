import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      backgroundDark: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
