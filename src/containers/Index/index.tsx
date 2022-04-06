import styles from './index.module.scss';
import { useEffect, useRef } from 'react';
import axios from 'axios';

export default function Index(): JSX.Element {
  // 创建 ref 获取 cards 盒子的 DOM
  const cardsRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios.get('/api/test').then((res) => {
      console.log(res);
    });

    // 动态设置 .cards 盒子的宽度
    if (cardsRef.current && cardsRef.current.parentNode) {
      const parentNode = cardsRef.current.parentNode as HTMLElement;
      const { paddingLeft } = getComputedStyle(parentNode);
      const { clientWidth } = parentNode;
      // 计算盒子的实际宽度
      cardsRef.current.style.width =
        clientWidth - 2 * parseFloat(paddingLeft) + 'px';
    }
  });

  return (
    <>
      <header className={styles.header}>
        <div className={styles.message}>
          <span className={styles.lead}>今天，</span>
          2022年01月07日周五，欢迎回到后台操作系统，累计售出59件商品，继续加油~
        </div>
        <div className={styles.todos}>
          <a href="#!" className={styles.todo}>
            <strong>25</strong>
            <span>待入库</span>
          </a>
          <a href="#!" className={styles.todo}>
            <strong>17</strong>
            <span>待入库</span>
          </a>
          <a href="#!" className={styles.todo}>
            <strong>928.00</strong>
            <span>待入库</span>
          </a>
        </div>
      </header>
      <main className={styles.main}>
        {/* 数据概览 */}
        <div className={styles.overview}>
          {/* 用户数据 */}
          <section className={styles.users}>
            <div className={styles.icons}>
              <img
                src={require('../../assets/images/user_slice_1.png').default}
                alt=""
              />
              <img
                src={require('../../assets/images/user_slice_2.png').default}
                alt=""
              />
            </div>
            <div className={styles.info}>
              <strong>
                2080 <small>人</small>
              </strong>
              <span className={styles.tips}>今日新增人数</span>
              <a href="#!">查看更新数据</a>
            </div>
          </section>
          {/* 用户收益 */}
          <section className={styles.profit}>
            <div className={styles.icons}>
              <img
                src={require('../../assets/images/user_slice_1.png').default}
                alt=""
              />
              <img
                src={require('../../assets/images/user_slice_2.png').default}
                alt=""
              />
            </div>
            <div className={styles.info}>
              <strong>
                28.5 <small>元</small>
              </strong>
              <span>今日新增人数</span>
              <a href="#!">查看更新数据</a>
            </div>
          </section>
          {/* 用户订单 */}
          <section className={styles.orders}>
            <h5 className={styles.title}>订单数据统计</h5>
            <div className={styles.quantity}>
              <div className={styles.legend}>
                <span>累计订单总数</span>
                <span>昨日新增订单</span>
              </div>
              <div className={styles.flat}>
                <span>236</span>
                <span>152</span>
                <div className={styles.mask}></div>
                <div className={styles.percent} style={{ width: '70%' }}></div>
              </div>
              <div className={styles.legend}>
                <span>每日订单</span>
                <div className={styles.tabs}>
                  <span className={styles.active}>累计</span>
                  <span>新增</span>
                </div>
              </div>
              <div className={styles.bars}>
                <div className={styles.bar} style={{ height: '10%' }}>
                  <span className={styles.value}>28</span>
                  <span className={styles.label}>9日</span>
                </div>
                <div className={styles.bar} style={{ height: '40%' }}>
                  <span className={styles.value}>120</span>
                  <span className={styles.label}>10日</span>
                </div>
                <div className={styles.bar} style={{ height: '60%' }}>
                  <span className={styles.value}>148</span>
                  <span className={styles.label}>11日</span>
                </div>
                <div className={styles.bar} style={{ height: '20%' }}>
                  <span className={styles.value}>60</span>
                  <span className={styles.label}>12日</span>
                </div>
                <div className={styles.bar} style={{ height: '50%' }}>
                  <span className={styles.value}>130</span>
                  <span className={styles.label}>13日</span>
                </div>
                <div className={styles.bar} style={{ height: '40%' }}>
                  <span className={styles.value}>120</span>
                  <span className={styles.label}>14日</span>
                </div>
                <div className={styles.bar} style={{ height: '30%' }}>
                  <span className={styles.value}>110</span>
                  <span className={styles.label}>15日</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* 实时战报 */}
        <div className={styles.realtime}>
          <h5 className={styles.title}>实时战报</h5>
          <div className={styles.report}>
            {/*  */}
            <div className={styles.caption}>
              {/* 下单总数 */}
              <div className={styles.total}>
                <strong>59</strong>
                <span>今日下单数</span>
              </div>
              {/* 环状进度条 */}
              <svg xmlns="http://www.w3.org/200/svg" height="160" width="160">
                <circle
                  cx="80"
                  cy="80"
                  r="72"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <circle
                  style={{
                    transformOrigin: 'center',
                    transform: 'rotate(-90deg)',
                  }}
                  cx="80"
                  cy="80"
                  r="72"
                  fill="none"
                  stroke="#213dc0"
                  strokeWidth="16"
                  strokeDasharray="80,10000"
                />
                <text
                  x="50%"
                  y="65"
                  textAnchor="middle"
                  style={{
                    fontSize: '12px',
                    fill: '#999',
                  }}
                >
                  下单转化率
                </text>
                <text
                  x="50%"
                  y="105"
                  textAnchor="middle"
                  style={{
                    fontSize: '32px',
                    fill: '#171C49',
                  }}
                >
                  17.6%
                </text>
              </svg>
            </div>
            <div className={styles.orders}>
              <div className={styles.thead}>
                <span>头像</span>
                <span>下单时间</span>
                <span>件数</span>
                <span>金额</span>
                <span>分类</span>
                <span>名称</span>
              </div>
              <div className={styles.wrapper}>
                <ul>
                  <li>
                    <span>
                      <img
                        src={
                          require('../../assets/uploads/user_avatar_2.png')
                            .default
                        }
                        alt=""
                      />
                    </span>
                    <span>2022-02-11 09:14</span>
                    <span>购买 2 件</span>
                    <span>实付 28.5 元</span>
                    <span>百货</span>
                    <span title="【好质量60款拼】2019夏季新款ins港风印花女式t恤宽松">
                      【好质量60款拼】2019夏季新款ins港风印花女式t恤宽松
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        src={
                          require('../../assets/uploads/user_avatar_1.png')
                            .default
                        }
                        alt=""
                      />
                    </span>
                    <span>2022-01-10 19:28</span>
                    <span>购买 2 件</span>
                    <span>实付 99 元</span>
                    <span>女装</span>
                    <span title="印花短袖t恤女2019夏季韩版修身弹力圆领打底衫女式学生上">
                      印花短袖t恤女2019夏季韩版修身弹力圆领打底衫女式学生上
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        src={
                          require('../../assets/uploads/user_avatar_2.png')
                            .default
                        }
                        alt=""
                      />
                    </span>
                    <span>2022-04-06 18:24</span>
                    <span>购买 3 件</span>
                    <span>实付 19.9 元</span>
                    <span>百货</span>
                    <span title="PC高档铝框拉杆箱TSA海关锁行李箱密码登机">
                      PC高档铝框拉杆箱TSA海关锁行李箱密码登机
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        src={
                          require('../../assets/uploads/user_avatar_3.png')
                            .default
                        }
                        alt=""
                      />
                    </span>
                    <span>2022-03-15 14:29</span>
                    <span>购买 1 件</span>
                    <span>实付 9.9 元</span>
                    <span>女装</span>
                    <span title="【好质量60款拼】2019夏季新款ins港风印花女式t恤宽松">
                      【好质量60款拼】2019夏季新款ins港风印花女式t恤宽松
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        src={
                          require('../../assets/uploads/user_avatar_1.png')
                            .default
                        }
                        alt=""
                      />
                    </span>
                    <span>2022-03-21 17:18</span>
                    <span>购买 4 件</span>
                    <span>实付 18.9 元</span>
                    <span>家居</span>
                    <span title="印花短袖t恤女2019夏季韩版修身弹力圆领打底衫女式学生上">
                      印花短袖t恤女2019夏季韩版修身弹力圆领打底衫女式学生上
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        src={
                          require('../../assets/uploads/user_avatar_2.png')
                            .default
                        }
                        alt=""
                      />
                    </span>
                    <span>2022-04-06 18:24</span>
                    <span>购买 2 件</span>
                    <span>实付 28.5 元</span>
                    <span>女装</span>
                    <span title="【好质量60款拼】2019夏季新款ins港风印花女式t恤宽松">
                      【好质量60款拼】2019夏季新款ins港风印花女式t恤宽松
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        src={
                          require('../../assets/uploads/user_avatar_3.png')
                            .default
                        }
                        alt=""
                      />
                    </span>
                    <span>2022-03-08 11:14</span>
                    <span>购买 3 件</span>
                    <span>实付 16.9 元</span>
                    <span>女装</span>
                    <span title="PC高档铝框拉杆箱TSA海关锁行李箱密码登机">
                      PC高档铝框拉杆箱TSA海关锁行李箱密码登机
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        src={
                          require('../../assets/uploads/user_avatar_1.png')
                            .default
                        }
                        alt=""
                      />
                    </span>
                    <span>2022-04-06 18:24</span>
                    <span>购买 1 件</span>
                    <span>实付 28.5 元</span>
                    <span>女装</span>
                    <span title="【好质量60款拼】2019夏季新款ins港风印花女式t恤宽松">
                      【好质量60款拼】2019夏季新款ins港风印花女式t恤宽松
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 新品入库 */}
        <div className={styles.goods}>
          <h5 className={styles.title}>新品入库</h5>
          <div className={styles.cards} ref={cardsRef}>
            <a href="#!">
              <img
                src={require('../../assets/uploads/goods_1.jpg').default}
                alt=""
              />
              <span className={styles.price}>￥12.82</span>
              <span>预计收入1.80元</span>
              <button>上架</button>
            </a>
            <a href="#!">
              <img
                src={require('../../assets/uploads/goods_2.jpg').default}
                alt=""
              />
              <span className={styles.price}>￥12.82</span>
              <span>预计收入1.80元</span>
              <button>上架</button>
            </a>
            <a href="#!">
              <img
                src={require('../../assets/uploads/goods_3.jpg').default}
                alt=""
              />
              <span className={styles.price}>￥12.82</span>
              <span>预计收入1.80元</span>
              <button>上架</button>
            </a>
            <a href="#!">
              <img
                src={require('../../assets/uploads/goods_4.jpg').default}
                alt=""
              />
              <span className={styles.price}>￥12.82</span>
              <span>预计收入1.80元</span>
              <button>上架</button>
            </a>
            <a href="#!">
              <img
                src={require('../../assets/uploads/goods_5.jpg').default}
                alt=""
              />
              <span className={styles.price}>￥12.82</span>
              <span>预计收入1.80元</span>
              <button>上架</button>
            </a>
            <a href="#!">
              <img
                src={require('../../assets/uploads/goods_6.jpg').default}
                alt=""
              />
              <span className={styles.price}>￥12.82</span>
              <span>预计收入1.80元</span>
              <button>上架</button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
