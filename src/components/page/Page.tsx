import './Page.css';

import { IPage } from './IPage';

/**
 * Page component
 */
export default function Page({ children }: IPage) {
  return <div className="page">{children}</div>;
}
