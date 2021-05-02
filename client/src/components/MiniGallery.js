import React from "react";
import Gallery from "./Gallery";
export default function MiniGallery() {
  return (
    <div
      style={{
        width: "100%",
        height: window.innerHeight + "px",
        overflow: "hidden",
      }}
    >
      <Gallery />
    </div>
  );
}
