# Deployment Guide

## 1. تثبيت الحزم

```bash
npm install
```

## 2. تشغيل الموقع محليًا

```bash
npm run dev
```

## 3. بناء الموقع

```bash
npm run build
```

## 4. رفع المشروع إلى GitHub

1. أنشئ مستودعًا جديدًا على GitHub.
2. اربط المجلد الحالي بالمستودع.
3. ادفع الفرع الرئيسي إلى GitHub.

## 5. ربط المستودع بـ Vercel

1. افتح Vercel.
2. اختر Import Project.
3. اربط مستودع GitHub الخاص بالموقع.
4. اترك إعدادات البناء الافتراضية لمشروع Next.js.

## 6. تغيير رابط APK لاحقًا

- عدّل `src/config/app-release.ts`.
- غيّر قيمة `apkDownloadUrl` إلى رابط GitHub Releases الجديد.
- سيستخدم الموقع و`/version.json` الرابط نفسه تلقائيًا.

## 7. تحديث `version.json` عند إصدار نسخة جديدة

- عدّل `versionName` و`versionCode` و`apkSize` و`releaseNotes` في `src/config/app-release.ts`.
- أعد البناء أو النشر.
- سيعكس مسار `/version.json` القيم الجديدة مباشرة.
