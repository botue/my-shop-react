import styles from "./index.module.scss";

export default function Index(): JSX.Element {
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
        <div className={styles.overview}>
          <section className={styles.users}></section>
          <section className={styles.profit}></section>
          <section className={styles.orders}></section>
        </div>
        <div className={styles.realtime}></div>
        <div className={styles.goods}></div>
      </main>
    </>
  );
}
