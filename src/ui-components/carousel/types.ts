import { ReactNode } from "react";

export interface CarouselProps<T> {
  data: T[];
  renderItem: (props: T, index: number) => ReactNode;
  title: string;
  subtitle: string;
  reverseHeader?: boolean;
  itemsToShow?: number;
}
