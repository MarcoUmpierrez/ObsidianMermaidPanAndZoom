import { Plugin } from 'obsidian';
import * as svgPanZoom from 'svg-pan-zoom';

export default class MermaidZoomPlugin extends Plugin {
	async onload() {
		// Run zoom setup when clicking anywhere (debugging)
		this.registerDomEvent(document, "click", () => {
			this.applyZoom();
		});

		// Run zoom setup periodically to ensure late-rendered diagrams get zoomed
		this.watchForMermaidDiagrams();
	}

	applyZoom() {
		const mermaidContainers = document.querySelectorAll("div.mermaid");
		mermaidContainers.forEach((container, index) => {
			const svg = container.querySelector("svg");
			if (!svg) {
				return;
			}

			// Fix cursor (should be a grab hand instead of text selection)
			svg.style.cursor = "grab";
			svg.addEventListener("mousedown", () => (svg.style.cursor = "grabbing"));
			svg.addEventListener("mouseup", () => (svg.style.cursor = "grab"));

			// Apply zoom
			svgPanZoom(svg, {
				zoomEnabled: true,
				controlIconsEnabled: true,
				fit: true,
				center: true,
			});
		});
	}

	watchForMermaidDiagrams() {
		const observer = new MutationObserver(() => {
			this.applyZoom();
		});

		observer.observe(document.body, { childList: true, subtree: true });
	}
}