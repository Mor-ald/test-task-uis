import { cast, flow, Instance, types } from 'mobx-state-tree';
import { getAreas, getMeters } from '../GlobalApi';
import {
  CountersAreasDataResult,
  CountersMetersData,
  CountersMetersDataResult,
} from '../ts/CountersApi';

import { createCountersTableData } from '../lib/CreateCountersTableData';

export const CountersTableData = types.model('CountersTableData', {
  id: types.identifier,
  type: types.string,
  order_number: types.number,
  installation_date: types.string,
  automatic: types.boolean,
  initial_values: types.number,
  address: types.string,
  description: types.string,
});

export const CountersStore = types
  .model('CountersStore', {
    countersData: types.array(CountersTableData),
    isLoadingData: true,
    offset: 20,
    currentPage: 1,
    limit: 20,
  })
  .actions((self) => {
    // Fetch counters
    const fetchCountersData = flow(function* () {
      try {
        // Set loading data to true
        self.isLoadingData = true;

        // Get meters data from the Meters API
        const response = yield getMeters(self.limit, self.offset);
        const metersData: CountersMetersDataResult = response.data.results;

        // Take an unique area ids from the meters data
        const areasData: CountersAreasDataResult = [];
        const areasIds: string[] = Array.from(
          new Set(metersData.map((item: CountersMetersData) => item.area.id))
        );

        // Get areas data from the Areas API by unique area id
        for (const areaId of areasIds) {
          try {
            const response = yield getAreas(areaId);
            areasData.push(...response.data.results);
          } catch (e) {
            console.log(e);
          }
        }

        // Create counters table data
        const data = createCountersTableData(
          metersData,
          areasData,
          self.currentPage
        );

        self.countersData = cast(data);

        // Set loading data to false
        self.isLoadingData = false;
      } catch (e) {
        self.isLoadingData = false;
        console.log(e);
      }
    });

    // Imitation of delete the meter from the Meters API
    const deleteCounter = (id: string) => {
      alert('Произошла имитация удаления строки c id:' + id);
      // запрос на удаление строки
      // deleteMeter(id)
      fetchCountersData();
    };

    // Toggle loading data (true/false)
    const toggleLoadingData = () => {
      self.isLoadingData = !self.isLoadingData;
    };

    // Change page by button click
    const changePage = (pageNumber: number) => {
      self.currentPage = pageNumber;
      self.offset = pageNumber * self.limit;
      fetchCountersData();
    };

    return {
      toggleLoadingData,
      changePage,
      fetchCountersData,
      deleteCounter,
    };
  });

export type CountersTableData = Instance<typeof CountersTableData>[];
