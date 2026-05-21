import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/shop/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff7ee", fontFamily: "sans-serif" }}>
      <p>Loading Feroz Sons Kids Collection…</p>
    </div>
  );
}
