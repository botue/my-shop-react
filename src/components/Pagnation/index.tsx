// 样式表
import styles from './index.module.scss';

export default function Pagnation(): JSX.Element {
  return (
    <>
      {/* 分页 */}
      <div className={styles.pagnation}>
        <a href="#!" className={styles.button}>
          上一页
        </a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a className={styles.active} href="#">
          3
        </a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">7</a>
        <a href="#">8</a>
        <a href="#">9</a>
        <a href="#">10</a>
        <a href="#!" className={styles.button}>
          下一页
        </a>
      </div>
    </>
  );
}
