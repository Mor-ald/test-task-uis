import './CountersRows.css';

import { useCallback } from 'react';
import { ICountersRows } from './ICountersRows';

/**
 * CountersRows component
 */
export default function CountersRows({ data, onDeleteRow }: ICountersRows) {
  const TypeCellTemplate = useCallback(({ type }: { type: string }) => {
    switch (type) {
      case 'ColdWaterAreaMeter': {
        return (
          <div className="type-col-td">
            <img src="/src/assets/Icon-Counters-Gvs.svg" />
            <span>ХВС</span>
          </div>
        );
      }

      case 'HotWaterAreaMeter': {
        return (
          <div className="type-col-td">
            <img src="/src/assets/Icon-Counters-Hvs.svg" />
            <span>ГВС</span>
          </div>
        );
      }

      default: {
        return <div className="type-col-td"></div>;
      }
    }
  }, []);

  const DeleteRowButton = useCallback(
    ({ id }: { id: string }) => {
      return (
        <button className="delete-row-button" onClick={() => onDeleteRow(id)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33334 6.00002V12H6.00001V6.00002H7.33334Z"
              fill="#C53030"
            />
            <path d="M10 6.00002V12H8.66668V6.00002H10Z" fill="#C53030" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.85284 0.666687H11.1472L11.8139 2.66669H14.6667V4.00002H13.3333L12.6667 15.3334H3.33334L2.66668 4.00002H1.33334V2.66669H4.18617L4.85284 0.666687ZM5.59163 2.66669H10.4084L10.1862 2.00002H5.81385L5.59163 2.66669ZM4.00001 4.00002L4.66668 14H11.3333L12 4.00002H4.00001Z"
              fill="#C53030"
            />
          </svg>
        </button>
      );
    },
    [onDeleteRow]
  );

  return (
    <>
      {data.map((item) => (
        <tr key={item.id}>
          <td className="number-col-td">{item.order_number}</td>
          <td>
            <TypeCellTemplate type={item.type} />
          </td>
          <td className="date-col-td">
            <div>{item.installation_date}</div>
          </td>
          <td className="auto-col-td">
            <div>{item.automatic ? 'Да' : 'Нет'}</div>
          </td>
          <td className="values-col-td">
            <div>{item.initial_values}</div>
          </td>
          <td className="address-col-td">
            <div>{item.address}</div>
          </td>
          <td className="description-col-td">
            <div>{item.description}</div>
          </td>
          <td className="button-col-td">
            <DeleteRowButton id={item.id} />
          </td>
        </tr>
      ))}
    </>
  );
}
