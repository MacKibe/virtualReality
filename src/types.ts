// src/types.ts
export interface Service {
  id: number;
  service: string;
  description: string;
  image_url: string;
  page_link: string;
}

export interface Profile {
  id: number;
  name: string;
  role: string;
  image_url: string;
}

export interface CoreValue {
  id: number;
  value: string;
  description: string;
}

export interface Data {
  services: Service[];
  profiles: Profile[];
  corevalues: CoreValue[];
}