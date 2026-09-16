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
        background: "#f5f3ec",
        color: "#17211f",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "1020px" }}>
        <div style={{ color: "#087f5b", display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 3, marginBottom: 32 }}>SOFTWARE QUALITY ASSURANCE · KATHMANDU</div>
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "serif", fontSize: 86, lineHeight: .98 }}>
          <span>Kiran Dhakal</span>
          <span style={{ color: "#087f5b", fontStyle: "italic" }}>I test like a builder.</span>
        </div>
        <div style={{ display: "flex", fontSize: 25, lineHeight: 1.4, marginTop: 38 }}>Developer insight · User empathy · Quality mindset</div>
      </div>
    </div>,
    size,
  );
}
