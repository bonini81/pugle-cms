export interface PortfolioItem {
  // image?: File | null;
  image: string;
  alt: string;
  title: string;
  category: string;
  description: string;
  linkTo: string;
  linkToText: string;
  hrefTo: string;
  key?: number;
}
