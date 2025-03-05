export type Page = {
  name: string;
  page_url: string;
};

export type Service = {
  id: string;
  service: string;
  page_link: string;
  image_url: string;
  description: string;
};

export type CoreValue = {
  id: string;
  value: string;
  description: string;
};

export type Profile = {
  name: string;
  role: string;
  image_url: string;
};
