import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';

// 布局结构
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// 样式表
import styles from './index.module.scss';

// 首页模块
import Index from '../Index';

// 商品模块
import GoodsCheckin from '../Goods/checkin';
import GoodsList from '../Goods/list';
import GoodsCategory from '../Goods/category';

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
            <Route path="/goods/checkin" element={<GoodsCheckin />} />
            <Route path="/goods/list" element={<GoodsList />} />
            <Route path="/goods/category" element={<GoodsCategory />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
