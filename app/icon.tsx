import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ alignItems: "center", background: "#087f5b", color: "white", display: "flex", fontSize: 25, fontWeight: 800, height: "100%", justifyContent: "center", width: "100%" }}>KD</div>,
    size,
  );
}
