import { NextResponse } from "next/server";
import { appRelease } from "@/config/app-release";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    version_name: appRelease.versionName,
    version_code: appRelease.versionCode,
    minimum_android: appRelease.minimumAndroid,
    apk_size: appRelease.apkSize,
    download_url: appRelease.apkDownloadUrl,
    force_update: false,
    release_notes: [...appRelease.releaseNotes],
  });
}
