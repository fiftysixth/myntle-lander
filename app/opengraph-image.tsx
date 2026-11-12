import { headers } from "next/headers";
import { ImageResponse } from "next/og";

export const alt = "Myntle — Ask what is happening, then ask for the trade";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Read the brand mark from the deployment that is rendering this card. Using
 * the request host keeps the route working on preview deployments, where the
 * production origin is not the host that is serving the image.
 *
 * If the asset cannot be read, the card falls back to the tile below rather
 * than failing the whole social preview.
 */
async function logoDataUri(): Promise<string | null> {
  try {
    const host = (await headers()).get("host");
    if (!host) return null;
    const local = host.startsWith("localhost") || host.startsWith("127.0.0.1");
    const response = await fetch(
      `${local ? "http" : "https"}://${host}/myntle-logo.svg`,
    );
    if (!response.ok) return null;
    const svg = await response.text();
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const logoSrc = await logoDataUri();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f4f4f4",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        {logoSrc ? (
          <img
            src={logoSrc}
            alt=""
            width={60}
            height={60}
            style={{ borderRadius: "14px" }}
          />
        ) : (
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "14px",
              background: "#00A6FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            M
          </div>
        )}
        <div style={{ fontSize: "30px", fontWeight: 600, color: "#1c1c1c" }}>
          Myntle
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <div
          style={{
            fontSize: "54px",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            color: "#9a9a9a",
          }}
        >
          Ask what is happening,
        </div>
        <div
          style={{
            fontSize: "54px",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            color: "#1c1c1c",
          }}
        >
          then ask for the trade.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #dedede",
          paddingTop: "24px",
        }}
      >
        <div style={{ fontSize: "24px", color: "#6b6b6b" }}>
          A chat-first finance app that shows its sources.
        </div>
        <div style={{ fontSize: "22px", color: "#9a9a9a" }}>myntle</div>
      </div>
    </div>,
  );
}
