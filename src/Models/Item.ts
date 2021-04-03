export interface RootObject {
  en?: ItemProp;
  pt?: ItemProp;
}

export interface ItemProp {
  discord?: string;
  twitter?: string;
  home?: Home;
  cotact?: Cotact;
  com?: Com;
  port?: any;
  portTemp?: any;
  contract: string;
}

export interface Port {
  type: string;
  content: Example[];
}

export interface Com {
  header: Header2;
  // prices: Price[];
  list: any;
  listTemp: any;
}

export interface Price {
  title: string;
  items: Item[];
}

export interface Item {
  list: string[];
  total: string;
}

export interface Header2 {
  title: string;
  desc: string;
  example: Example[];
  exampleTemp: Example;
}

export interface Example {
  type: "image" | "video" | "";
  url: any;
}

export interface Cotact {
  email: string;
  title: string;
  dec: string;
}

export interface Home {
  header: Header;
  info: Info;
}

export interface Info {
  title: string;
  desc: string;
  img: string;
}

export interface Header {
  title: string;
  desc: string;
}
