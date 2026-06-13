export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  imageUrl?: string;
}

export interface NavLink {
  label: string;
  path: string;
}
