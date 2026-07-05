import Link from "next/link";
import styles from "./page.module.css";
import { appRelease } from "@/config/app-release";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroPanel}`}>
          <div className={styles.heroCopy}>
            <span className={styles.badge}>404</span>
            <h1 className={styles.heroTitle}>
              الصفحة غير <span className={styles.heroTitleAccent}>موجودة</span>
            </h1>
            <p className={styles.heroDescription}>
              يبدو أن الرابط غير صحيح. يمكنك العودة إلى الصفحة الرئيسية أو فتح صفحة تعليمات
              التثبيت.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="/">
                العودة للرئيسية
              </Link>
              <Link className={styles.secondaryButton} href={appRelease.installPath}>
                تعليمات التثبيت
              </Link>
            </div>
          </div>
          <div className={styles.phoneStage} aria-hidden="true">
            <div className={styles.phone}>
              <div className={styles.phoneScreen} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
