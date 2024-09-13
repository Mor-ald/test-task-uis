import { CountersTableData } from '../../stores/CountersStore';

export interface ICountersRows {
  data: CountersTableData;
  onDeleteRow: (id: string) => void;
}
