import Link from "next/link";
import styles from "../page.module.css";
import { appRelease } from "@/config/app-release";
import { AndroidIcon, DownloadIcon } from "@/components/icons";

export const metadata = {
  title: "تعليمات التثبيت",
  description: "تعليمات تثبيت APK الخاصة بحراج يمني على Android.",
};

const steps = [
  "اضغط تحميل التطبيق.",
  "افتح ملف APK بعد اكتمال التنزيل.",
  "اسمح بالتثبيت من هذا المصدر إذا طلب Android.",
  "ثبّت التطبيق وافتحه.",
];

export default function InstallPage() {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <h1>تعليمات التثبيت</h1>
            <div className={styles.underline} />
            <p>اتبع هذه الخطوات لتثبيت نسخة Android التجريبية من {appRelease.appName}.</p>
          </div>

          <div className={styles.steps}>
            {steps.map((text, index) => (
              <article key={text} className={styles.stepCard}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <h2 className={styles.stepTitle} style={{ fontSize: "1.15rem" }}>
                  {text}
                </h2>
                <p className={styles.stepText}>
                  {index === 0
                    ? "استخدم زر التحميل في الصفحة الرئيسية أو الزر أدناه."
                    : index === 1
                      ? "قد يظهر التحذير الطبيعي الخاص بملفات APK المحملة من المتصفح."
                      : index === 2
                        ? "يمكنك تفعيل الإذن من إعدادات Android مؤقتًا أثناء التثبيت."
                        : "بعد اكتمال التثبيت افتح التطبيق مباشرة وابدأ الاستخدام."}
                </p>
              </article>
            ))}
          </div>

          <div className={styles.installWarning} style={{ marginTop: 16 }}>
            هذه نسخة تجريبية غير منشورة حاليًا على Google Play.
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
            <a className={styles.primaryButton} href={appRelease.apkDownloadPath} download>
              <DownloadIcon width={22} height={22} />
              <span>تحميل APK</span>
            </a>
            <Link className={styles.secondaryButton} href="/">
              العودة للرئيسية
            </Link>
          </div>

          <div className={styles.featureCard} style={{ marginTop: 18 }}>
            <div className={styles.featureIcon}>
              <AndroidIcon width={26} height={26} />
            </div>
            <h2 className={styles.featureTitle}>Android {appRelease.minimumAndroidLabel}</h2>
            <p className={styles.featureText}>
              النسخة الحالية مخصصة لنظام Android فقط، وحجم الملف التقريبي {appRelease.apkSize}.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
