import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Confam - Anonymous Salary & Career Insights";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <svg viewBox="0 0 880 940" style={{ width: "140px", height: "140px" }}>
        <path
          d="M456.608 163.175V321.262M456.608 163.175L176.003 280.05M456.608 163.175L680.357 263.951M456.608 321.262L320.906 375.175V528.429M456.608 321.262L680.357 424.937M320.906 528.429L456.608 592.248L680.357 501.406L857 597.998M320.906 528.429L169.883 629.375M857 597.998V764.159L456.608 927.675M857 597.998L456.608 756.937M456.608 927.675L15 727.5V185.85M456.608 927.675V756.937M857 185.85L456.608 16.1748L15 185.85M857 185.85V356.518L680.357 424.937M857 185.85L680.357 263.951M680.357 424.937V263.951M176.003 280.05L169.883 629.375M176.003 280.05L15 185.85M169.883 629.375L456.608 756.937"
          stroke="black"
          strokeWidth="40"
          fill="none"
        />
      </svg>

      <div
        style={{
          fontSize: "120px",
          fontWeight: "700",
          color: "#000",
          letterSpacing: "-0.05em",
        }}
      >
        Confam
      </div>

      {/* Slogan Section */}
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "#301140",
          textAlign: "center",
          maxWidth: "800px",
          lineHeight: 1.2,
        }}
      >
        Know Before You Go. Every Company. Every Role.
      </div>
    </div>,
    {
      ...size,
    },
  );
}
