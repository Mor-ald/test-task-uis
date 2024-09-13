import { observer } from 'mobx-react-lite';
import CountersTable from '../../components/counters-table/CountersTable';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';

import { useEffect, useState } from 'react';
import { CountersStore } from '../../stores/CountersStore';
import Spinner from '../../components/spinner/Spinner';

const Counters = observer(() => {
  const [counterStore] = useState(() => CountersStore.create());

  useEffect(() => {
    counterStore.fetchCountersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Page>
        <PageHeader header="Список счетчиков" />
        <CountersTable
          isLoadingData={counterStore.isLoadingData}
          data={counterStore.countersData}
          currentPage={counterStore.currentPage}
          spinner={<Spinner />}
          onChangePage={counterStore.changePage}
          onDeleteRow={counterStore.deleteCounter}
        />
      </Page>
    </>
  );
});

export default Counters;
