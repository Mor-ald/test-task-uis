import { CountersTableData } from '../../stores/CountersStore';

export interface ICountersTable {
  isLoadingData: boolean;
  data: CountersTableData;
  currentPage: number;
  spinner: JSX.Element;
  onChangePage: (pageNumber: number) => void;
  onDeleteRow: (id: string) => void;
}
