export interface IItem {
  name: string;
  id: string;
  image: string;
}

export interface IItemState {
  items: IItem[] | null;
  isLoading: boolean;
  error: Error | null;
}
