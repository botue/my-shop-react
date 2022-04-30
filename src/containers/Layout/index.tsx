import { useEffect } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';

import { useAppDispatch } from '../../redux/hooks';
import { collapseSidebar } from './layoutSlice';

// 布局结构
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// 样式表
import styles from './index.module.scss';

// 首页模块
import Index from '../Index';

// 商品模块
import GoodsList from '../Goods';
import GoodsCheckin from '../Goods/checkin';
import Category from '../Category';
import CategoryAdd from '../Category/add';

export default function Layout(): JSX.Element {
  const collapsed = useAppSelector((state) => {
    return state.collapsed;
  });

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(collapseSidebar());
  }, [pathname]);

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Index />,
    },
    {
      path: 'goods/checkin',
      element: <GoodsCheckin />,
    },
    {
      path: 'goods/list',
      element: <GoodsList />,
    },
    {
      path: 'goods/category',
      element: <Category />,
    },
    {
      path: 'goods/category/add',
      element: <CategoryAdd />,
    },
  ];

  const element = useRoutes(routes);

  return (
    <div className={[styles.base, !collapsed || styles.collapsed].join(' ')}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.body}>{element}</div>
      </div>
    </div>
  );
}
