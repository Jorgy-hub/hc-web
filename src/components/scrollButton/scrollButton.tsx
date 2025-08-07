import styles from "./scrollButton.module.css";

export default function ScrollButton() {
    return (
        <div className={styles["mouse_scroll"]}>
            <div className={styles.mouse}>
                <div className={styles.wheel}></div>
            </div>
            <div>
                <span className={styles["m_scroll_arrows"] + " " + styles["uno"]}></span>
                <span className={styles["m_scroll_arrows"] + " " + styles["dos"]}></span>
                <span className={styles["m_scroll_arrows"] + " " + styles["tres"]}></span>
            </div>
        </div>
    )
}