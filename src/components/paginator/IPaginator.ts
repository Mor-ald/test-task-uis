export interface IPaginator {
  currentPage: number;
  onChangePage: (page: number) => void;
}
