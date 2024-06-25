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
