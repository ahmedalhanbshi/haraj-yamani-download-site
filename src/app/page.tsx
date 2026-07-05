import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { appRelease } from "@/config/app-release";
import {
  AndroidIcon,
  DownloadIcon,
  FilterIcon,
  PhotosIcon,
  PlusIcon,
  SearchIcon,
  ShieldCheckIcon,
  UsersIcon,
  WorldIcon,
} from "@/components/icons";

const versionItems = [
  {
    label: "الإصدار",
    value: appRelease.versionName,
    icon: <PlusIcon width={22} height={22} />,
  },
  {
    label: "رقم البناء",
    value: String(appRelease.versionCode),
    icon: <AndroidIcon width={22} height={22} />,
  },
  {
    label: "حجم التطبيق",
    value: appRelease.apkSize,
    icon: <DownloadIcon width={22} height={22} />,
  },
  {
    label: "النظام",
    value: "Android",
    icon: <AndroidIcon width={22} height={22} />,
  },
  {
    label: "الحد الأدنى",
    value: appRelease.minimumAndroidLabel,
    icon: <WorldIcon width={22} height={22} />,
  },
];

const features = [
  {
    title: "نشر الإعلانات بسهولة",
    text: "أنشئ إعلانًا واضحًا في خطوات بسيطة مع واجهة عربية مباشرة وسريعة.",
    icon: <PlusIcon width={26} height={26} />,
  },
  {
    title: "تصنيفات وفلترة متقدمة",
    text: "اعثر على الإعلان المناسب بسرعة عبر التصنيف والمنطقة ونوع العرض.",
    icon: <FilterIcon width={26} height={26} />,
  },
  {
    title: "رفع عدة صور للإعلان",
    text: "اعرض السلعة بوضوح عبر صور متعددة توضح الحالة والتفاصيل المهمة.",
    icon: <PhotosIcon width={26} height={26} />,
  },
  {
    title: "حسابات شخصية للمستخدمين",
    text: "تابع إعلاناتك وتفضيلاتك ونشاطك من حساب شخصي مرتب وسهل الاستخدام.",
    icon: <UsersIcon width={26} height={26} />,
  },
  {
    title: "واجهة عربية تدعم RTL",
    text: "تجربة قراءة واتجاه كامل من اليمين إلى اليسار مع خطوط عربية واضحة.",
    icon: <WorldIcon width={26} height={26} />,
  },
  {
    title: "البحث حسب التصنيف والمنطقة",
    text: "ابحث بسرعة عن السيارات والعقارات والجوالات وغيرها من الأقسام.",
    icon: <SearchIcon width={26} height={26} />,
  },
];

const steps = [
  {
    title: "اضغط تحميل التطبيق",
    text: "استخدم زر التحميل الرئيسي في أعلى الصفحة أو داخل قسم البداية.",
  },
  {
    title: "افتح ملف APK",
    text: "بعد اكتمال التنزيل افتح الملف من التنزيلات أو من إشعار النظام.",
  },
  {
    title: "اسمح بالتثبيت",
    text: "إذا طلب Android ذلك، فعّل التثبيت من هذا المصدر بشكل مؤقت.",
  },
  {
    title: "ثبّت وافتح التطبيق",
    text: "أكمل التثبيت ثم افتح التطبيق وابدأ التصفح أو النشر مباشرة.",
  },
];

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <h2>{title}</h2>
      <div className={styles.underline} />
      <p>{description}</p>
    </div>
  );
}

function AppDownloadButton({ className }: { className: string }) {
  return (
    <a className={className} href={appRelease.apkDownloadUrl}>
      <AndroidIcon width={22} height={22} />
      <span>تحميل للأندرويد</span>
    </a>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={`${styles.shell} ${styles.headerInner}`}>
          <div className={styles.brand}>
            <div className={styles.brandMark}>
              <Image
                src="/brand/logo.png"
                alt={`${appRelease.appName} logo`}
                width={160}
                height={160}
                priority
              />
            </div>
            <div className={styles.brandText}>
              <div className={styles.brandName}>{appRelease.appName}</div>
              <div className={styles.brandSub}>منصة إعلانات مبوبة موثوقة في اليمن</div>
            </div>
          </div>

          <a className={styles.topCta} href={appRelease.apkDownloadUrl}>
            <DownloadIcon width={20} height={20} />
            <span>تحميل التطبيق</span>
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroPanel}`}>
          <div className={`${styles.heroCopy} motion-rise`}>
            <span className={styles.badge}>نسخة تجريبية</span>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleAccent}>بيع واشترِ</span> في اليمن بسهولة
            </h1>
            <p className={styles.heroDescription}>
              حراج يمني منصة إعلانات مبوبة تساعدك على عرض وشراء السيارات والعقارات والجوالات
              وغيرها بسهولة.
            </p>
            <div className={styles.heroActions}>
              <AppDownloadButton className={styles.primaryButton} />
              <Link className={styles.secondaryButton} href={appRelease.installPath}>
                تعليمات التثبيت
              </Link>
            </div>
            <div className={styles.heroNote}>
              <ShieldCheckIcon width={20} height={20} />
              <span>الملف موقع رقميًا ويجب تحميله من الموقع الرسمي فقط.</span>
            </div>
          </div>

          <div className={`${styles.phoneStage} motion-rise motion-delay-1`} aria-hidden="true">
            <div className={styles.halo} />
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneTopBar}>
                  <span>9:41</span>
                  <span>{appRelease.appName}</span>
                </div>
                <div className={styles.phoneSearch}>
                  <SearchIcon width={18} height={18} />
                  <span>ابحث عن أي شيء...</span>
                </div>
                <div className={styles.phoneChips}>
                  {["سيارات", "عقارات", "جوالات"].map((item) => (
                    <div key={item} className={styles.phoneChip}>
                      <span style={{ fontSize: "1rem" }}>⬤</span>
                      <span className={styles.phoneChipLabel}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.phoneFeed}>
                  <div className={styles.feedSection}>
                    <div className={styles.feedHeading}>
                      <span>إعلانات مميزة</span>
                      <span style={{ color: "#ef4444", fontSize: "0.95rem" }}>عرض الكل</span>
                    </div>
                    <div className={styles.cardRow}>
                      <div className={styles.miniCard}>
                        <div className={styles.miniCardImage}>
                          <Image
                            src="/brand/splash.png"
                            alt="Haraj Yamani splash"
                            width={400}
                            height={400}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                        <div className={styles.miniCardBody}>
                          <div className={styles.miniCardTitle}>حسابات شخصية</div>
                          <div className={styles.miniCardMeta}>واجهة عربية واضحة</div>
                        </div>
                      </div>
                      <div className={styles.miniCard}>
                        <div className={styles.miniCardImage} />
                        <div className={styles.miniCardBody}>
                          <div className={styles.miniCardTitle}>نشر سريع</div>
                          <div className={styles.miniCardMeta}>إرفاق صور متعددة</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <SectionHeading
            title="معلومات الإصدار"
            description="جميع أرقام النسخة والتحميل معروضة هنا من ملف إعدادات واحد حتى يسهل تحديثها لاحقًا."
          />
          <div className={styles.versionGrid}>
            {versionItems.map((item) => (
              <div key={item.label} className={`${styles.infoCard} motion-rise`}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div className={styles.infoLabel}>{item.label}</div>
                <div className={styles.infoValue}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <SectionHeading
            title="مميزات التطبيق"
            description="واجهة خفيفة وسريعة تركّز على ما يحتاجه المستخدم فعلاً في الإعلانات المبوبة."
          />
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className={`${styles.featureCard} motion-rise`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <SectionHeading
            title="خطوات تثبيت التطبيق"
            description="ابدأ التحميل ثم ثبّت ملف APK يدويًا على Android عبر الخطوات التالية."
          />
          <div className={styles.stepsLayout}>
            <div className={styles.steps}>
              {steps.map((step, index) => (
                <article key={step.title} className={`${styles.stepCard} motion-rise`}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </article>
              ))}
            </div>
            <div className={styles.installWarning}>
              هذه نسخة تجريبية غير منشورة حاليًا على Google Play.
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <SectionHeading
            title="الأمان والموثوقية"
            description="الملف موقع رقميًا، والتحديثات ستُنشر لاحقًا من هذا الموقع الرسمي فقط."
          />
          <div className={styles.securityGrid}>
            <div className={styles.securityVisual}>
              <div className={styles.shieldCircle}>
                <div className={styles.shieldBadge}>
                  <Image
                    src="/brand/logo.png"
                    alt={`${appRelease.appName} logo`}
                    width={140}
                    height={140}
                    style={{ width: "86px", height: "86px", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.securityList}>
              <div className={styles.securityItem}>
                <ShieldCheckIcon width={22} height={22} />
                <p>الملف موقع رقميًا لضمان سلامته قبل التثبيت.</p>
              </div>
              <div className={styles.securityItem}>
                <ShieldCheckIcon width={22} height={22} />
                <p>نوصي بتحميل التطبيق من هذا الموقع الرسمي فقط.</p>
              </div>
              <div className={styles.securityItem}>
                <ShieldCheckIcon width={22} height={22} />
                <p>تحديثات التطبيق ستُنشر لاحقًا عبر هذا الموقع بشكل رسمي.</p>
              </div>
              <div className={styles.securityItem}>
                <ShieldCheckIcon width={22} height={22} />
                <p>نحافظ على خصوصيتك وبياناتك بحسب صفحة السياسة المختصرة.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerInner}`}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.brandMark}>
                <Image src="/brand/logo.png" alt={appRelease.appName} width={160} height={160} />
              </div>
              <div>
                <p className={styles.footerBrandName}>{appRelease.appName}</p>
                <p className={styles.footerBrandText}>جميع الحقوق محفوظة.</p>
              </div>
            </div>

            <nav className={styles.footerLinks} aria-label="روابط الموقع">
              <Link href={appRelease.privacyPolicyPath}>سياسة الخصوصية</Link>
              <Link href={appRelease.installPath}>تعليمات التثبيت</Link>
              <a href={`mailto:${appRelease.contactEmail}`}>التواصل: {appRelease.contactEmail}</a>
            </nav>

            <div className={styles.footerMeta}>
              <div>الإصدار: {appRelease.versionName}</div>
              <div>رقم البناء: {appRelease.versionCode}</div>
              <div>النظام: Android</div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {appRelease.appName}. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
