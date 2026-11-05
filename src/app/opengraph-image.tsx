import { ImageResponse } from "next/og";

export const alt = "Biniyam Samuel Yaya — Computer Engineer and Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          alignItems: "center",
          background: "#090d12",
          color: "#f2f5f7",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(169,184,197,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(169,184,197,.055) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(90deg, transparent, black)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", padding: "76px 92px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#55d6c2", fontSize: 18, letterSpacing: 4, textTransform: "uppercase" }}>
            <span style={{ width: 40, height: 2, background: "#55d6c2" }} />
            Engineering Portfolio
          </div>
          <div style={{ marginTop: 40, fontSize: 72, fontWeight: 600, letterSpacing: -4, lineHeight: 1.05 }}>
            Biniyam Samuel Yaya
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 26, color: "#aab5bf", fontSize: 30, letterSpacing: -0.5 }}>
            Computer Engineer <span style={{ color: "#55d6c2" }}> | </span> Full-Stack Developer
          </div>
          <div style={{ marginTop: 22, color: "#83919c", fontSize: 20, letterSpacing: 1.5 }}>
            SOFTWARE  /  HARDWARE  /  EMBEDDED SYSTEMS
          </div>
        </div>
        <div style={{ position: "absolute", right: 96, bottom: 90, display: "flex", width: 126, height: 126, alignItems: "center", justifyContent: "center", border: "1px solid rgba(85,214,194,.55)", borderRadius: 80, color: "#55d6c2", fontSize: 28, letterSpacing: 3 }}>
          BY
        </div>
      </div>
    ),
    size,
  );
}
