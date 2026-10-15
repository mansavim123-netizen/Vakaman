"use client";

import type { PointerEvent } from "react";

export default function ArchitectureField() {
  function moveField(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    event.currentTarget.style.setProperty("--pointer-x", String(x) + "%");
    event.currentTarget.style.setProperty("--pointer-y", String(y) + "%");
    const shiftX = (x - 50) * 0.16;
    const shiftY = (y - 50) * 0.12;
    event.currentTarget.style.setProperty("--shift-x", String(shiftX) + "px");
    event.currentTarget.style.setProperty("--shift-y", String(shiftY) + "px");
    event.currentTarget.style.setProperty("--shift-x-reverse", String(shiftX * -0.6) + "px");
    event.currentTarget.style.setProperty("--shift-y-reverse", String(shiftY * -0.6) + "px");
  }

  function resetField(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--pointer-x", "50%");
    event.currentTarget.style.setProperty("--pointer-y", "48%");
    event.currentTarget.style.setProperty("--shift-x", "0px");
    event.currentTarget.style.setProperty("--shift-y", "0px");
    event.currentTarget.style.setProperty("--shift-x-reverse", "0px");
    event.currentTarget.style.setProperty("--shift-y-reverse", "0px");
  }

  return (
    <div className="architecture-field" aria-hidden="true" onPointerMove={moveField} onPointerLeave={resetField}>
      <div className="architecture-field__atmosphere" />
      <div className="architecture-field__grid" />
      <div className="architecture-field__axis architecture-field__axis--vertical" />
      <div className="architecture-field__axis architecture-field__axis--horizontal" />
      <div className="architecture-field__monolith architecture-field__monolith--rear" />
      <div className="architecture-field__monolith architecture-field__monolith--main">
        <div className="architecture-field__face architecture-field__face--front" />
        <div className="architecture-field__face architecture-field__face--side" />
        <div className="architecture-field__face architecture-field__face--top" />
        <div className="architecture-field__cut" />
      </div>
      <div className="architecture-field__plinth" />
      <div className="architecture-field__light" />
      <span className="architecture-field__annotation architecture-field__annotation--top">FORM / MATERIAL / LIGHT</span>
      <span className="architecture-field__annotation architecture-field__annotation--bottom">A STUDY IN PROPORTION</span>
      <span className="architecture-field__index">01 — 04</span>
    </div>
  );
}
