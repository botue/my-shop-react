import { useState, useEffect } from 'react'

import {
  Link,
  useMatch,
  useResolvedPath
} from "react-router-dom"

import type { LinkProps } from "react-router-dom"

import styles from './index.module.scss'
import avatar from '../../../../assets/images/avatar_1.jpg'

export default function Sidebar () {
  // 组件状态
  const [navs] = useState([
    {
      icon: 'icon-home',
      text: '首页',
      path: '/',
      children: []
    },
    {
      icon: 'icon-menu',
      text: '商品管理',
      path: '/goods',
      children: [
        {
          icon: '',
          text: '选品入库',
          path: '/goods/add'
        },
        {
          icon: '',
          text: '商品列表',
          path: 'goods/list'
        },
        {
          icon: '',
          text: '商品分类',
          path: 'goods/category'
        },
      ]
    },
    {
      icon: 'icon-list',
      text: '订单管理',
      path: '/order',
      children: []
    },
    {
      icon: 'icon-bell',
      text: '售后管理',
      path: '/service',
      children: []
    },
    {
      icon: 'icon-folder',
      text: '财务管理',
      path: '/finance',
      children: []
    },    {
      icon: 'icon-user',
      text: '用户管理',
      path: '/user',
      children: []
    },    {
      icon: 'icon-expand',
      text: 'DIY设置',
      path: '/settings',
      children: []
    },
  ])

  useEffect(() => {

  });

  // 展开/折叠导航菜单
  function navToggle (ev: any) {
    ev.target.classList.toggle(styles.active)
    ev.target.nextSibling.classList.toggle(styles.collapsed)
    ev.preventDefault()
  };

  return (
    <>
      <div className={styles.avatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={styles.navs}>
        <ul>
          {navs.map(nav =>
            <li key={ nav.text }>
              {nav.children.length === 0
                ? <NavLink
                    className={nav.icon}
                    to={nav.path}>{nav.text}</NavLink>
                : <NavLink
                    className={[nav.icon, styles.label].join(' ')}
                    onClick={navToggle}
                    to={nav.path}>{nav.text}</NavLink> }

              {nav.children.length !== 0 && <ul className={styles.collapsed}>
                {nav.children.map(item =>
                  <li key={item.text}>
                    <NavLink to={item.path}>{item.text}</NavLink>
                  </li>
                )}
              </ul>}
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

// 自定义导航链接
function NavLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true });
  const className = props.className
  if (match) {
    props.className = [className, styles.active].join(' ')
  }

  return (
    <>
      <Link to={to} {...props}>{children}</Link>
    </>
  )
}