import './PageHeader.css';

import { IPageHeader } from './IPageHeader';

/**
 * PageHeader component
 */
export default function PageHeader({ header }: IPageHeader) {
  return (
    <div className="page-header">
      <h3>{header}</h3>
    </div>
  );
}
