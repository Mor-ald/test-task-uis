import './Paginator.css';

import { IPaginator } from './IPaginator';

/**
 * Paginator component
 */
export default function Paginator({ currentPage, onChangePage }: IPaginator) {
  return (
    <>
      <button
        className={currentPage === 1 ? 'pag-button-active' : 'pag-button'}
        onClick={() => onChangePage(1)}
      >
        1
      </button>
      <button
        className={currentPage === 2 ? 'pag-button-active' : 'pag-button'}
        onClick={() => onChangePage(2)}
      >
        2
      </button>
      <button
        className={currentPage === 3 ? 'pag-button-active' : 'pag-button'}
        onClick={() => onChangePage(3)}
      >
        3
      </button>
      <button className="pag-button pag-button-dots">...</button>
      <button
        className={currentPage === 4 ? 'pag-button-active' : 'pag-button'}
        onClick={() => onChangePage(4)}
      >
        4
      </button>
      <button
        className={currentPage === 5 ? 'pag-button-active' : 'pag-button'}
        onClick={() => onChangePage(5)}
      >
        5
      </button>
      <button
        className={currentPage === 6 ? 'pag-button-active' : 'pag-button'}
        onClick={() => onChangePage(6)}
      >
        6
      </button>
    </>
  );
}
