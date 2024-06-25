export interface MenuItemType {
  createdAt: string;
  updatedAt: string;
  heading: string;
  link: LinkType[];
}

export interface LinkType {
  id: number;
  title: string;
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
