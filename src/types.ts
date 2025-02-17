export type Font = {
  h1: string;
  h2: string;
  h3: string;
  p: string;
};

export type Color = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
};

export type Page = {
  name: string;
  page_url: string;
};

export type Service = {
  id: string;
  service: string;
  page_link: string;
  image_url: string;
};

export type AppData = {
  font: Font;
  color: Color;
  pages: Page[];
  services: Service[];
};
