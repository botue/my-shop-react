import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styles from './index.module.scss';

import Index from '../Index';

export default function Layout(): JSX.Element {
  const collapsed = useAppSelector((state) => {
    return state.collapsed;
  });

  return (
    <div className={[styles.base, !collapsed || styles.collapsed].join(' ')}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.body}>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
