import { CountersTableData } from '../stores/CountersStore';
import {
  CountersAreasDataResult,
  CountersMetersDataResult,
} from '../ts/CountersApi';

import { convertDate } from './ConvertDate';

/**
 * A function that creates a table data for the counters page
 * @param metersData - ```CountersMetersApiData```
 * @param areasData - ```CountersAreasApiData```
 * @param currentPage - Number of the current page
 * @returns ```CountersTableData```
 */
export function createCountersTableData(
  metersData: CountersMetersDataResult,
  areasData: CountersAreasDataResult,
  currentPage: number
) {
  const tableData: CountersTableData = [];

  for (let i = 0; i < metersData.length; i++) {
    const area = areasData.find((area) => area.id === metersData[i].area.id);
    const address = area
      ? area.house.address.split(',').slice(1).join(',').slice(1) +
        `, ${area.str_number_full}`
      : '';

    tableData.push({
      id: metersData[i].id,
      type: metersData[i]._type[0],
      order_number: i + 1 + currentPage * 20 - 20,
      installation_date: convertDate(metersData[i].installation_date),
      automatic: !!metersData[i].is_automatic,
      initial_values: metersData[i].initial_values[0],
      address: address,
      description: metersData[i].description,
    });
  }

  return tableData;
}
