import React from "react";

function LoadingFullScreen({ styles }) {
  return (
    <div id="idLoading" style={styles}>
      <div className="atbd-spin-dots spin-lg">
        <span className="spin-dot badge-dot dot-primary"></span>
        <span className="spin-dot badge-dot dot-primary"></span>
        <span className="spin-dot badge-dot dot-primary"></span>
        <span className="spin-dot badge-dot dot-primary"></span>
      </div>
    </div>
  );
}

export default LoadingFullScreen;
