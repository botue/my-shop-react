// AntV 可视化库
import { Chart, Area, LineAdvance, Tooltip, Axis } from 'bizcharts';

// 样式表
import styles from './checkin.module.scss';

export default function Checkin(): JSX.Element {
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
                <span className={styles.hyphen}>-</span>
                <span className={styles.select}>请选择二级分类</span>
              </div>
              <div className={styles.item}>
                <span className={styles.text}>价格区间: </span>
                <span className={styles.input}>
                  <input type="text" placeholder="请输入最低金额" />
                </span>
                <span className={styles.hyphen}>-</span>
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
            <div className={styles.chart}>
              <Chart
                padding={[0, 0, 0, 0]}
                data={[
                  { year: '1991', value: 10800 },
                  { year: '1992', value: 11000 },
                  { year: '1993', value: 12000 },
                  { year: '1994', value: 12409 },
                  { year: '1995', value: 13700 },
                  { year: '1996', value: 14056 },
                  { year: '1997', value: 13782 },
                  { year: '1998', value: 12640 },
                  { year: '1999', value: 11000 },
                ]}
                scale={{
                  value: {
                    min: 10000,
                    nice: true,
                  },
                  year: {
                    range: [0, 1],
                  },
                }}
                pure
                autoFit
              >
                <Tooltip shared />
                <Axis
                  name="value"
                  position="left"
                  grid={{
                    line: {
                      type: 'line',
                      style: {
                        stroke: '#d9d9d9',
                        lineDash: [2, 2],
                      },
                    },
                  }}
                  label={null}
                />
                <Axis name="year" />
                <Area color={'#213dc0'} position="year*value" />
                <LineAdvance point color={'#213dc0'} position="year*value" />
              </Chart>
            </div>
          </div>
          <div className={styles.total}>
            <h5>累计未入库商品</h5>
            <strong>189562件</strong>
            <div className={styles.chart}>
              <Chart
                padding={[0, 0, 0, 0]}
                data={[
                  { year: '1991', value: 12468 },
                  { year: '1992', value: 13100 },
                  { year: '1993', value: 14900 },
                  { year: '1994', value: 15409 },
                  { year: '1995', value: 17000 },
                  { year: '1996', value: 17456 },
                  { year: '1997', value: 15982 },
                  { year: '1998', value: 14040 },
                  { year: '1999', value: 13233 },
                ]}
                scale={{
                  value: {
                    min: 10000,
                    nice: true,
                  },
                  year: {
                    range: [0, 1],
                  },
                }}
                pure
                autoFit
              >
                <Tooltip shared />
                <Axis
                  name="value"
                  position="left"
                  grid={{
                    line: {
                      type: 'line',
                      style: {
                        stroke: '#d9d9d9',
                        lineDash: [2, 2],
                      },
                    },
                  }}
                  label={null}
                />
                <Axis name="year" />
                <Area color={'#ffc306'} position="year*value" />
                <LineAdvance point color={'#ffc306'} position="year*value" />
              </Chart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
