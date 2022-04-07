import { MouseEvent } from 'react';
import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './index.module.scss';
import logo from '../../../../assets/images/logo.png';

export default function Sidebar(): JSX.Element {
  // 组件状态
  const [navs] = useState([
    {
      icon: 'icon-home',
      text: '首页',
      path: '/',
      children: [],
    },
    {
      icon: 'icon-menu',
      text: '商品管理',
      path: '/goods',
      children: [
        {
          icon: '',
          text: '选品入库',
          path: 'goods/checkin',
        },
        {
          icon: '',
          text: '商品列表',
          path: 'goods/list',
        },
        {
          icon: '',
          text: '商品分类',
          path: 'goods/category',
        },
      ],
    },
    {
      icon: 'icon-list',
      text: '订单管理',
      path: '/order',
      children: [],
    },
    {
      icon: 'icon-bell',
      text: '售后管理',
      path: '/service',
      children: [],
    },
    {
      icon: 'icon-folder',
      text: '财务管理',
      path: '/finance',
      children: [],
    },
    {
      icon: 'icon-user',
      text: '用户管理',
      path: '/user',
      children: [],
    },
    {
      icon: 'icon-expand',
      text: 'DIY设置',
      path: '/settings',
      children: [],
    },
  ]);

  // 展开/折叠导航菜单
  function navToggle(ev: MouseEvent<HTMLAnchorElement>) {
    ev.currentTarget.classList.toggle(styles.active);
    const nextSibling = ev.currentTarget.nextSibling as HTMLUListElement;
    nextSibling.classList.toggle(styles.collapsed);

    ev.preventDefault();
  }

  return (
    <>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.navs}>
        <ul>
          {navs.map((nav) => (
            <li key={nav.text}>
              {nav.children.length === 0 ? (
                <NavLink className={nav.icon} to={nav.path}>
                  {nav.text}
                </NavLink>
              ) : (
                <NavLink
                  className={[nav.icon, styles.label].join(' ')}
                  onClick={navToggle}
                  to={nav.path}
                >
                  {nav.text}
                </NavLink>
              )}
              <ul className={styles.collapsed}>
                {nav.children.map((item) => (
                  <li key={item.text}>
                    <NavLink to={item.path}>{item.text}</NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
