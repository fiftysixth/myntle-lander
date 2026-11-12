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

/**
 * A faint ledger grid gives the card the texture of a record sheet without
 * competing with the one line it exists to carry.
 */
function LedgerGrid() {
  const step = 56;
  const columns = Math.ceil(size.width / step);
  const rows = Math.ceil(size.height / step);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: size.width,
        height: size.height,
        display: "flex",
      }}
    >
      {Array.from({ length: columns + 1 }, (_, index) => (
        <div
          key={`v-${index}`}
          style={{
            position: "absolute",
            top: 0,
            left: index * step,
            width: 1,
            height: size.height,
            background: "#e9e9e9",
          }}
        />
      ))}
      {Array.from({ length: rows + 1 }, (_, index) => (
        <div
          key={`h-${index}`}
          style={{
            position: "absolute",
            top: index * step,
            left: 0,
            width: size.width,
            height: 1,
            background: "#e9e9e9",
          }}
        />
      ))}
    </div>
  );
}

/**
 * A ruler-like footer replaces the sentence the card used to spell out. The
 * longer ticks every fifth mark keep it reading as a scale, not a barcode.
 */
function LedgerRule() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        borderTop: "1px solid #dedede",
        paddingTop: 16,
      }}
    >
      {Array.from({ length: 31 }, (_, index) => (
        <div
          key={index}
          style={{
            width: 1,
            height: index % 5 === 0 ? 12 : 6,
            background: index % 5 === 0 ? "#c9c9c9" : "#dcdcdc",
          }}
        />
      ))}
    </div>
  );
}

export default async function Image() {
  const logoSrc = await logoDataUri();

  return new ImageResponse(
    <div
      style={{
        position: "relative",
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
      <LedgerGrid />
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          width: 1150,
          height: 580,
          display: "flex",
          border: "1px solid #e3e3e3",
          borderRadius: 14,
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
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

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
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

      <div style={{ position: "relative", display: "flex" }}>
        <LedgerRule />
      </div>
    </div>,
  );
}
