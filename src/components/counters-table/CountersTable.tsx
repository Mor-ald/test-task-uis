import './CountersTable.css';

import { ICountersTable } from './ICountersTable';
import Paginator from '../paginator/Paginator';
import CountersRows from '../counters-rows/CountersRows';

/**
 * CountersTable component
 */
export default function CountersTable({
  isLoadingData,
  data,
  currentPage,
  spinner,
  onChangePage,
  onDeleteRow,
}: ICountersTable) {
  return (
    <>
      <table className="counters-table">
        <thead>
          <tr>
            <th className="number-col-th">№</th>
            <th className="type-col-th">
              <div>Тип</div>
            </th>
            <th className="date-col-th">
              <div>Дата установки</div>
            </th>
            <th className="auto-col-th">
              <div>Автоматический</div>
            </th>
            <th className="values-col-th">
              <div>Текущие показания</div>
            </th>
            <th className="address-col-th">
              <div>Адрес</div>
            </th>
            <th className="description-col-th">
              <div>Примечания</div>
            </th>
            <th className="button-col-th"></th>
          </tr>
        </thead>
        <tbody>
          {isLoadingData ? (
            spinner
          ) : (
            <CountersRows data={data} onDeleteRow={onDeleteRow} />
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={8}>
              <Paginator
                currentPage={currentPage}
                onChangePage={onChangePage}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
