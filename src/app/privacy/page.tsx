import Link from "next/link";
import styles from "../page.module.css";
import { appRelease } from "@/config/app-release";

export const metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة خصوصية مختصرة لموقع تحميل حراج يمني.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <h1>سياسة الخصوصية</h1>
            <div className={styles.underline} />
            <p>
              هذه صفحة مختصرة توضح طريقة التعامل مع البيانات في موقع تحميل {appRelease.appName}.
            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureText} style={{ marginBottom: 16 }}>
              نحن لا نطلب تسجيل دخول ولا نستخدم قاعدة بيانات في هذا الموقع. يتم استخدام الصفحة فقط
              لتقديم معلومات الإصدار وروابط التحميل والتعليمات.
            </p>
            <p className={styles.featureText} style={{ marginBottom: 16 }}>
              إذا تواصلت معنا عبر البريد الإلكتروني، فسيُستخدم بريدك فقط للرد على رسالتك.
            </p>
            <p className={styles.featureText}>
              يمكن تحديث هذه السياسة لاحقًا عندما تتغير طريقة النشر أو التوزيع.
            </p>
          </div>
          <div style={{ marginTop: 18 }}>
            <Link className={styles.secondaryButton} href="/">
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
