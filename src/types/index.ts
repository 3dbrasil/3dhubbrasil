export interface ToolItem {
  name: string;
  link: string;
  desc: string;
  type?: string;
  image?: string;
  categoryName?: string;
  isLinkList?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  isLinkList?: boolean;
  items: ToolItem[];
}
