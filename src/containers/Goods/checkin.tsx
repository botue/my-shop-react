import React from 'react';

// 样式表
import styles from './checkin.module.scss';

// AntV 可视化库
import { Chart, Line } from 'bizcharts';

export default function Checkin(): JSX.Element {
  const data = [
    { x: '1991', y: 123, type: 'A' },
    { x: '1991', y: 123, type: 'B' },
    { x: '1992', y: 123, type: 'A' },
    { x: '1992', y: 123, type: 'B' },
    { x: '1993', y: 123, type: 'A' },
    { x: '1993', y: 123, type: 'B' },
  ];
  return (
    <>
      <div className={styles.panel}>
        {/* 用户操作 */}
        <div className={styles.actions}>
          <ul>
            <li className={styles.sort}>
              <span className={styles.label}>排序</span>
              <div className={styles.item}>
                <span className={[styles.text, styles.active].join(' ')}>
                  默认排序
                </span>
                <span className={styles.text}>在售最低</span>
                <span className={styles.text}>月销量最高</span>
                <span className={styles.cursor}></span>
              </div>
            </li>
            <li className={styles.filter}>
              <span className={styles.label}>筛选</span>
              <div className={styles.item}>
                <span className={styles.text}>商品分类: </span>
                <span className={styles.select}>请选择一级分类</span>
                <span className={styles.select}>请选择二级分类</span>
              </div>
              <div className={styles.item}>
                <span className={styles.text}>价格区间: </span>
                <span className={styles.input}>
                  <input type="text" placeholder="请输入最低金额" />
                </span>
                <span className={styles.text}>至</span>
                <span className={styles.input}>
                  <input type="text" placeholder="请输入最高金额" />
                </span>
              </div>
            </li>
            <li className={styles.search}>
              <span className={styles.label}>搜索</span>
              <div className={styles.item}>
                <span className={styles.text}>精准搜索: </span>
                <span className={styles.input}>
                  <input type="text" placeholder="请输入商品名称或ID" />
                </span>
              </div>
            </li>
          </ul>
          {/* 操作按钮 */}
          <div className={styles.buttons}>
            <a href="#!" className={styles.slideup}>
              收起
            </a>
            <a href="#!" className={styles.reset}>
              重置
            </a>
            <a href="#!" className={styles.submit}>
              查询
            </a>
          </div>
        </div>
        {/* 可视化图表 */}
        <div className={styles.charts}>
          <div className={styles.today}>
            <h5>今日同步商品</h5>
            <strong>5852件</strong>
            <div className={styles.chart} id="today">
              <Chart data={data} width={500} autoFit>
                <Line position="x*y" color="type" />
              </Chart>
            </div>
          </div>
          <div className={styles.total}>
            <h5>累计未入库商品</h5>
            <strong>189562件</strong>
            <div className={styles.chart} id="total"></div>
          </div>
        </div>
      </div>
    </>
  );
}
