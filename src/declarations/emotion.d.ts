import '@emotion/react';

type TextProps = {
  fontSize: string;
  lineHeight: string;
};
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
      h1: TextProps;
      h2: TextProps;
      h3: TextProps;
      text: TextProps;
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
