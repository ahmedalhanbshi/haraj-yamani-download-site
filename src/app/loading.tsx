export default function Loading() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f5f5f7",
        color: "#18181b",
        fontFamily: "var(--font-thmanyah), system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: 12,
          placeItems: "center",
          padding: 24,
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            border: "4px solid rgba(229,31,42,0.18)",
            borderTopColor: "#e51f2a",
            animation: "spin 0.9s linear infinite",
          }}
        />
        <p style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700 }}>جارٍ تحميل الموقع...</p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </main>
  );
}
