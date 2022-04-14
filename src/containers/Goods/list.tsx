import Header from './components/Header';
import Pagnation from '@/components/Pagnation';

// 样式表
import styles from './list.module.scss';

export default function List(): JSX.Element {
  return (
    <>
      <Header />
      <div className={styles.actions}>
        <div className={styles.wrap}>
          <span className={styles.title}>快捷操作</span>
          <label htmlFor="">
            <input type="checkbox" /> 今日入库
          </label>
          <label htmlFor="">
            <input type="checkbox" /> 当前页面
          </label>
          <label htmlFor="">
            <input type="checkbox" /> 筛选结果
          </label>
          <label htmlFor="">
            <input type="checkbox" /> 所有商品
          </label>
          <span className={styles.total}>已选中 59 件，共 8982 条数据</span>
        </div>
        <a href="#!" className={styles.button}>
          一键上架
        </a>
      </div>
      <div className={styles.stocklist}>
        <table>
          <thead>
            <tr>
              <th>xx</th>
              <th>商品ID</th>
              <th>商品图片</th>
              <th style={{ width: 220 }}>商品名称</th>
              <th>所属分类</th>
              <th>在售价</th>
              <th>预估收益</th>
              <th>月销量</th>
              <th>库存</th>
              <th>排序</th>
              <th style={{ width: 220 }}>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xx</td>
              <td>5556224520</td>
              <td>
                <img src={require('../../assets/uploads/goods_1.jpg')} alt="" />
              </td>
              <td title="韩版宽松印花t恤女">
                <span className="text-overflow">韩版宽松印花t恤女</span>
              </td>
              <td>女装</td>
              <td>21.98元</td>
              <td>1.98元</td>
              <td>2858件</td>
              <td>998件</td>
              <td>
                <span>fdfsfs</span>
              </td>
              <td>
                <a href="#!" className={[styles.button, styles.info].join(' ')}>
                  上架
                </a>
                <a
                  href="#!"
                  className={[styles.button, styles.danger].join(' ')}
                >
                  删除
                </a>
              </td>
            </tr>
            <tr>
              <td>xx</td>
              <td>5556224520</td>
              <td>
                <img src={require('../../assets/uploads/goods_1.jpg')} alt="" />
              </td>
              <td title="韩版宽松印花t恤女装夏季短袖上衣网红潮流百搭新款打底衫ins衣服">
                <span className="text-overflow">
                  韩版宽松印花t恤女装夏季短袖上衣网红潮流百搭新款打底衫ins衣服
                </span>
              </td>
              <td>女装</td>
              <td>21.98元</td>
              <td>1.98元</td>
              <td>2858件</td>
              <td>998件</td>
              <td>
                <span>fdfsfs</span>
              </td>
              <td>
                <a href="#!" className={[styles.button, styles.info].join(' ')}>
                  上架
                </a>
                <a
                  href="#!"
                  className={[styles.button, styles.danger].join(' ')}
                >
                  删除
                </a>
              </td>
            </tr>
            <tr>
              <td>xx</td>
              <td>5556224520</td>
              <td>
                <img src={require('../../assets/uploads/goods_1.jpg')} alt="" />
              </td>
              <td title="韩版宽松印花t恤女装夏季短袖上衣网红潮流百搭新款打底衫ins衣服">
                <span className="text-overflow">
                  韩版宽松印花t恤女装夏季短袖上衣网红潮流百搭新款打底衫ins衣服
                </span>
              </td>
              <td>女装</td>
              <td>21.98元</td>
              <td>1.98元</td>
              <td>2858件</td>
              <td>998件</td>
              <td>
                <span>fdfsfs</span>
              </td>
              <td>
                <a href="#!" className={[styles.button, styles.info].join(' ')}>
                  上架
                </a>
                <a
                  href="#!"
                  className={[styles.button, styles.danger].join(' ')}
                >
                  删除
                </a>
              </td>
            </tr>
            <tr>
              <td>xx</td>
              <td>5556224520</td>
              <td>
                <img src={require('../../assets/uploads/goods_1.jpg')} alt="" />
              </td>
              <td title="韩版宽松印花t恤女装夏季短袖上衣网红潮流百搭新款打底衫ins衣服">
                <span className="text-overflow">
                  韩版宽松印花t恤女装夏季短袖上衣网红潮流百搭新款打底衫ins衣服
                </span>
              </td>
              <td>女装</td>
              <td>21.98元</td>
              <td>1.98元</td>
              <td>2858件</td>
              <td>998件</td>
              <td>
                <span>fdfsfs</span>
              </td>
              <td>
                <a href="#!" className={[styles.button, styles.info].join(' ')}>
                  上架
                </a>
                <a
                  href="#!"
                  className={[styles.button, styles.danger].join(' ')}
                >
                  删除
                </a>
              </td>
            </tr>
            <tr>
              <td>xx</td>
              <td>5556224520</td>
              <td>
                <img src={require('../../assets/uploads/goods_1.jpg')} alt="" />
              </td>
              <td title="韩版宽松印花t恤女装夏季短袖上衣网红潮流百搭新款打底衫ins衣服">
                <span className="text-overflow">
                  韩版宽松印花t恤女装夏季短袖上衣网红潮流百搭新款打底衫ins衣服
                </span>
              </td>
              <td>女装</td>
              <td>21.98元</td>
              <td>1.98元</td>
              <td>2858件</td>
              <td>998件</td>
              <td>
                <span>fdfsfs</span>
              </td>
              <td>
                <a href="#!" className={[styles.button, styles.info].join(' ')}>
                  上架
                </a>
                <a
                  href="#!"
                  className={[styles.button, styles.danger].join(' ')}
                >
                  删除
                </a>
              </td>
            </tr>
            <tr>
              <td>xx</td>
              <td>5556224520</td>
              <td>
                <img src={require('../../assets/uploads/goods_1.jpg')} alt="" />
              </td>
              <td title="韩版宽松印花t恤女装夏季短袖上衣网红潮流百搭新款打底衫ins衣服">
                <span className="text-overflow">
                  韩版宽松印花t恤女装夏季短袖上衣网红潮流百搭新款打底衫ins衣服
                </span>
              </td>
              <td>女装</td>
              <td>21.98元</td>
              <td>1.98元</td>
              <td>2858件</td>
              <td>998件</td>
              <td>
                <span>fdfsfs</span>
              </td>
              <td>
                <a href="#!" className={[styles.button, styles.info].join(' ')}>
                  上架
                </a>
                <a
                  href="#!"
                  className={[styles.button, styles.danger].join(' ')}
                >
                  删除
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagnation />
    </>
  );
}
