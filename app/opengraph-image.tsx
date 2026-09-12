import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} social preview`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#f7f8f6",
        color: "#18202d",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
        <div style={{ color: "#2875bd", display: "flex", fontSize: 26, fontWeight: 700, marginBottom: 28 }}>NEXT.JS FRONTEND FOUNDATION</div>
        <div style={{ display: "flex", fontSize: 74, fontWeight: 800, lineHeight: 1.05 }}>{siteConfig.name}</div>
        <div style={{ color: "#596374", display: "flex", fontSize: 30, lineHeight: 1.4, marginTop: 30 }}>{siteConfig.description}</div>
      </div>
    </div>,
    size,
  );
}
