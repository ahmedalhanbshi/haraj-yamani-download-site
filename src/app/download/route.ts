import { appRelease } from "@/config/app-release";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const response = await fetch(appRelease.apkDownloadUrl, {
    redirect: "follow",
    cache: "no-store",
  });

  if (!response.ok || !response.body) {
    return new Response("APK download is temporarily unavailable.", {
      status: 502,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  }

  return new Response(response.body, {
    status: 200,
    headers: {
      "content-type": "application/vnd.android.package-archive",
      "content-disposition": 'attachment; filename="haraj-yamani-demo.apk"',
      "cache-control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      pragma: "no-cache",
      expires: "0",
    },
  });
}
