import { MouseEvent } from "react";
import { useAppDispatch } from "../../../../redux/hooks";

import { toggleSidebar } from "../../layoutSlice";

import styles from "./index.module.scss";

export default function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  function sidebarToggle(ev: MouseEvent<HTMLAnchorElement>) {
    ev.currentTarget.classList.toggle(styles.flip);
    ev.preventDefault();

    dispatch(toggleSidebar());
  }

  return (
    <>
      <a href="#!" className={styles.togglebar} onClick={sidebarToggle}>
        {" "}
      </a>
    </>
  );
}
