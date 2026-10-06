import { animate } from "motion/mini";

// The HTML and SVG are visible at rest. Motion only enhances that state.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const desktopPointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 64rem)");
const entranceViewport = window.matchMedia("(min-width: 48rem)");
const figure = document.querySelector<HTMLElement>(".software-figure");
const text = Array.from(document.querySelectorAll<HTMLElement>("[data-hero-text]"));
const layers = Array.from(document.querySelectorAll<SVGElement>(".layer-motion"));
type Controls = ReturnType<typeof animate>;
let entrance: Controls[] = [];
let interaction: Controls[] = [];
const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function stopInteraction() {
  interaction.forEach((control) => control.stop());
  interaction = [];
}

function restoreStatic() {
  entrance.forEach((control) => control.stop());
  entrance = [];
  stopInteraction();
  [...text, ...layers].forEach((element) => {
    element.style.removeProperty("transform");
    element.style.removeProperty("opacity");
  });
}

if (!reducedMotion.matches && entranceViewport.matches) {
  text.forEach((element, index) => {
    entrance.push(animate(element, { transform: ["translateY(12px)", "translateY(0px)"], opacity: [0.85, 1] }, { duration: 0.45, delay: index * 0.045, ease }));
  });
  layers.forEach((layer, index) => {
    entrance.push(animate(layer, { transform: ["translateY(18px)", "translateY(0px)"] }, { duration: 0.6, delay: 0.09 + index * 0.06, ease }));
  });
}

function setSeparation(expanded: boolean) {
  if (reducedMotion.matches || !desktopPointer.matches) return;
  entrance.forEach((control) => control.complete());
  entrance = [];
  stopInteraction();
  layers.forEach((layer, index) => {
    const offset = expanded ? (1 - index) * 18 : 0;
    interaction.push(animate(layer, { transform: `translateY(${offset}px)` }, { duration: expanded ? 0.36 : 0.28, ease }));
  });
}

figure?.addEventListener("pointerenter", (event) => {
  if (event.pointerType === "mouse") setSeparation(true);
});
figure?.addEventListener("pointerleave", () => setSeparation(false));
reducedMotion.addEventListener("change", restoreStatic);
desktopPointer.addEventListener("change", restoreStatic);
entranceViewport.addEventListener("change", restoreStatic);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) restoreStatic();
});
