import Header from './components/Header';
import Pagnation from '@/components/Pagnation';

// 样式表
import styles from './checkin.module.scss';

export default function Checkin(): JSX.Element {
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
          一键入库
        </a>
      </div>
      <div className={styles.goods}>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_7.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_8.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_9.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_10.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_11.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_12.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_13.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_14.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_15.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_16.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_17.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_18.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_19.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={require('../../assets/uploads/goods_20.jpg')}
            className={styles.cover}
            alt=""
          />
          <p className={styles.price}>
            ￥82.00 <small>预计收入2.80元</small>
          </p>
          <div className={styles.extra}>
            <p className={styles.name}>
              木林森男鞋夏季2019新款韩版潮流网布透气鞋
            </p>
            <span className={styles.stock}>库存: 18562件</span>
            <span className={styles.sales}>月销: 6820件</span>
            <span className={styles.mark}>标注</span>
          </div>
        </div>
      </div>
      <Pagnation />
    </>
  );
}
