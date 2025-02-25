export interface SnackItem {
  id: number;
  name: string;
  images: string[];
  variants: {
    weight: number;
    price: number;
  }[];
}
