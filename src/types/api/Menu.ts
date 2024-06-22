export interface Root {
  data: Daum[];
  meta: Meta;
}

export interface Daum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  submenus: Submenus;
}

export interface Submenus {
  data: Daum2[];
}

export interface Daum2 {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  createdAt: string;
  updatedAt: string;
  heading: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
