import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";
import { appRelease } from "@/config/app-release";
import {
  AndroidIcon,
  BadgeCheckIcon,
  DownloadIcon,
  FilterIcon,
  MapPinIcon,
  PhotosIcon,
  PlusIcon,
  SearchIcon,
  ShieldCheckIcon,
  TagIcon,
  UsersIcon,
  WhatsappIcon,
} from "@/components/icons";

const versionItems = [
  {
    label: "الإصدار",
    value: <MetricValue>{appRelease.versionName}</MetricValue>,
    icon: <PlusIcon width={22} height={22} />,
  },
  {
    label: "رقم البناء",
    value: <MetricValue>{appRelease.versionCode}</MetricValue>,
    icon: <BadgeCheckIcon width={22} height={22} />,
  },
  {
    label: "حجم التطبيق",
    value: <MetricValue>{appRelease.apkSize}</MetricValue>,
    icon: <DownloadIcon width={22} height={22} />,
  },
  {
    label: "النظام",
    value: <MetricValue>Android</MetricValue>,
    icon: <AndroidIcon width={22} height={22} />,
  },
  {
    label: "الحد الأدنى",
    value: (
      <span>
        <MetricValue>Android 7.0</MetricValue> أو أحدث
      </span>
    ),
    icon: <AndroidIcon width={22} height={22} />,
  },
];

const features = [
  {
    title: "نشر الإعلانات بسهولة",
    text: "أضف إعلانك بخطوات بسيطة وواضحة.",
    icon: <PlusIcon width={26} height={26} />,
  },
  {
    title: "تصنيفات وفلاتر متقدمة",
    text: "اعثر على المطلوب بسرعة من الفئات.",
    icon: <FilterIcon width={26} height={26} />,
  },
  {
    title: "رفع عدة صور للإعلان",
    text: "اعرض منتجك بشكل أوضح وأكثر ثقة.",
    icon: <PhotosIcon width={26} height={26} />,
  },
  {
    title: "البحث حسب التصنيف والمنطقة",
    text: "نتائج أدق وسرعة في الوصول للإعلان.",
    icon: <SearchIcon width={26} height={26} />,
  },
  {
    title: "واجهة عربية تدعم RTL",
    text: "قراءة مريحة واتجاه منطقي للمحتوى.",
    icon: <MapPinIcon width={26} height={26} />,
  },
  {
    title: "حسابات شخصية للمستخدمين",
    text: "ملف واضح، وإدارة أسهل للإعلانات.",
    icon: <UsersIcon width={26} height={26} />,
  },
];

const steps = [
  "اضغط تحميل التطبيق",
  "افتح ملف APK",
  "اسمح بالتثبيت",
  "ثبّت وافتح التطبيق",
];

const safetyPoints = [
  "الملف موقع ومتاح من هذا الموقع الرسمي فقط.",
  "ننصح بتحميل التطبيق من هذا الموقع فقط.",
  "لا تحوّل أي مبلغ قبل المعاينة والتأكد من السلعة والبائع.",
  "حراج يمني منصة وسيطة ولا يضمن عمليات الدفع أو التسليم.",
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
      <p>{description}</p>
    </div>
  );
}

function AppDownloadButton({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <a className={className} href={appRelease.apkDownloadPath} download>
      <DownloadIcon width={20} height={20} />
      <span>{children}</span>
    </a>
  );
}

function MetricValue({ children }: { children: ReactNode }) {
  return (
    <span className={styles.ltrValue} dir="ltr">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.backdrop} aria-hidden="true">
        <span className={styles.backdropBlobA} />
        <span className={styles.backdropBlobB} />
        <span className={styles.backdropBlobC} />
      </div>

      <header className={styles.header}>
        <div className={styles.shell}>
          <div className={styles.headerInner}>
            <div className={styles.brand}>
              <div className={styles.brandMark}>
                <Image
                  src="/brand/icon-maskable-512.png"
                  alt="شعار حراج يمني"
                  fill
                  priority
                  sizes="56px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.brandText}>
                <div className={styles.brandName}>حراج يمني</div>
                <div className={styles.brandSub}>منصة إعلانات يمنية موثوقة</div>
              </div>
            </div>

            <AppDownloadButton className={styles.headerCta}>
              تحميل التطبيق
            </AppDownloadButton>
          </div>
        </div>
      </header>

      <section className={styles.heroSection}>
        <div className={styles.shell}>
          <div className={styles.heroCard}>
            <div className={styles.heroCopy}>
              <span className={styles.badge}>نسخة تجريبية</span>
              <h1 className={styles.heroTitle}>
                بيع و<span className={styles.heroAccent}>اشترِ</span> في اليمن بسهولة
              </h1>
              <p className={styles.heroDescription}>
                حراج يمني منصة إعلانات مبوبة تساعدك على عرض وشراء السيارات والعقارات والجوالات
                وغيرها بسهولة.
              </p>

              <div className={styles.heroActions}>
                <AppDownloadButton className={styles.primaryButton}>
                  تحميل للأندرويد
                </AppDownloadButton>
                <Link className={styles.secondaryButton} href={appRelease.installPath}>
                  تعليمات التثبيت
                </Link>
              </div>

              <p className={styles.heroNote}>
                ملف APK رسمي من حراج يمني — النسخة غير منشورة حاليًا على Google Play
              </p>

              <div className={styles.trustRow} aria-label="نقاط الثقة">
                <div className={styles.trustItem}>
                  <BadgeCheckIcon width={18} height={18} />
                  <span>خفيف وسريع</span>
                </div>
                <div className={styles.trustItem}>
                  <BadgeCheckIcon width={18} height={18} />
                  <span>واجهة عربية</span>
                </div>
                <div className={styles.trustItem}>
                  <WhatsappIcon width={18} height={18} />
                  <span>تواصل واتساب</span>
                </div>
              </div>
            </div>

            <div className={styles.phoneStage} aria-hidden="true">
              <div className={styles.phoneGlow} />
              <div className={styles.phoneFrame}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  <div className={styles.phoneScreenBg} />
                  <div className={styles.phoneTopBar}>
                    <span>9:41</span>
                    <span>{appRelease.appName}</span>
                  </div>
                  <div className={styles.phoneContent}>
                    <div className={styles.phoneHeroStrip}>
                      <div className={styles.phoneHeroLogo}>
                        <Image
                          src="/brand/icon-maskable-512.png"
                          alt=""
                          fill
                          sizes="112px"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div>
                        <div className={styles.phoneHeroTitle}>حراج يمني</div>
                        <div className={styles.phoneHeroSub}>بيع وشراء بسهولة</div>
                      </div>
                    </div>

                    <div className={styles.phoneSearch}>
                      <SearchIcon width={18} height={18} />
                      <span>ابحث عن إعلان أو قسم</span>
                    </div>

                    <div className={styles.phoneChips}>
                      {["سيارات", "عقارات", "جوالات"].map((item) => (
                        <div key={item} className={styles.phoneChip}>
                          <TagIcon width={16} height={16} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.phoneListing}>
                      <div className={styles.phoneListingHeader}>
                        <span>إعلانات مميزة</span>
                        <span>عرض الكل</span>
                      </div>
                      <div className={styles.phoneCards}>
                        <article className={styles.phoneCard}>
                          <div className={styles.phoneCardImage}>
                            <Image
                              src="/brand/splash.png"
                              alt="لقطة من تطبيق حراج يمني"
                              fill
                              sizes="160px"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className={styles.phoneCardBody}>
                            <div className={styles.phoneCardTitle}>واجهة عربية واضحة</div>
                            <div className={styles.phoneCardText}>تجربة مرتبة وسريعة</div>
                          </div>
                        </article>
                        <article className={styles.phoneCard}>
                          <div className={styles.phoneCardImageAlt}>
                            <div className={styles.phoneCardIcon}>
                              <PhotosIcon width={24} height={24} />
                            </div>
                          </div>
                          <div className={styles.phoneCardBody}>
                            <div className={styles.phoneCardTitle}>رفع عدة صور</div>
                            <div className={styles.phoneCardText}>تفاصيل أوضح للإعلان</div>
                          </div>
                        </article>
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
            description="تفاصيل الإصدار والحجم والنظام موضوعة هنا بشكل واضح ومختصر."
          />

          <div className={styles.versionGrid}>
            {versionItems.map((item) => (
              <article key={item.label} className={styles.infoCard}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div className={styles.infoLabel}>{item.label}</div>
                <div className={styles.infoValue}>{item.value}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <SectionHeading
            title="مميزات التطبيق"
            description="ستة كروت فقط تلخص القيمة الأساسية بدون ازدحام بصري."
          />

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
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
            description="الخطوات مكتوبة بلغة بسيطة لمستخدم غير تقني."
          />

          <div className={styles.installLayout}>
            <div className={styles.stepsTimeline}>
              {steps.map((step, index) => (
                <article key={step} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <h3 className={styles.stepTitle}>{step}</h3>
                  <p className={styles.stepText}>
                    {index === 0 && "استخدم زر التحميل في أعلى الصفحة أو في قسم البداية."}
                    {index === 1 && "بعد انتهاء التنزيل ستجد الملف في التنزيلات أو عبر الإشعار."}
                    {index === 2 && "إن طلب Android الإذن ففعله مؤقتًا لإتمام التثبيت."}
                    {index === 3 && "بعد التثبيت افتح التطبيق وابدأ التصفح مباشرة."}
                  </p>
                </article>
              ))}
            </div>

            <div className={styles.warningBox}>
              هذه نسخة تجريبية غير منشورة حاليًا على Google Play.
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.safetyCard}>
            <div className={styles.safetyCopy}>
              <SectionHeading
                title="الأمان والموثوقية"
                description="حمّل الملف من المصدر الرسمي فقط واتبع احتياطات الشراء المعتادة."
              />

              <div className={styles.safetyList}>
                {safetyPoints.map((point) => (
                  <div key={point} className={styles.safetyItem}>
                    <ShieldCheckIcon width={20} height={20} />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.safetyVisual} aria-hidden="true">
              <div className={styles.safetyGlow} />
              <div className={styles.safetyLogoWrap}>
                <div className={styles.safetyLogoInner}>
                  <Image
                    src="/brand/icon-maskable-512.png"
                    alt=""
                    fill
                    priority
                    sizes="160px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrandRow}>
              <div className={styles.footerBrand}>
                <div className={styles.brandMark}>
                  <Image
                    src="/brand/icon-maskable-512.png"
                    alt="شعار حراج يمني"
                    fill
                    sizes="56px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <div className={styles.footerBrandName}>حراج يمني</div>
                  <div className={styles.footerBrandText}>جميع الحقوق محفوظة</div>
                </div>
              </div>

              <div className={styles.footerVersion}>
                <div>
                  الإصدار <MetricValue>{appRelease.versionName}</MetricValue>
                </div>
                <div>
                  البناء <MetricValue>{appRelease.versionCode}</MetricValue>
                </div>
                <div>
                  <MetricValue>Android 7.0</MetricValue> أو أحدث
                </div>
              </div>
            </div>

            <nav className={styles.footerLinks} aria-label="روابط الموقع">
              <Link href={appRelease.privacyPolicyPath}>سياسة الخصوصية</Link>
              <Link href={appRelease.installPath}>تعليمات التثبيت</Link>
              <a href={`mailto:${appRelease.contactEmail}`}>تواصل معنا</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
