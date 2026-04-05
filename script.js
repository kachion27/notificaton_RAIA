document.addEventListener("DOMContentLoaded", () => {
	const layer = document.getElementById("particle-layer");
	const card = document.querySelector(".maintenance-card");

	if (!layer || !card) {
		return;
	}

	const particleCount = window.matchMedia("(max-width: 760px)").matches ? 16 : 28;

	for (let index = 0; index < particleCount; index += 1) {
		const particle = document.createElement("span");
		particle.className = "particle";

		const size = 3 + Math.random() * 6;
		const x = Math.random() * 100;
		const delay = Math.random() * 10;
		const duration = 10 + Math.random() * 10;
		const driftX = (Math.random() - 0.5) * 180;
		const driftY = -120 - Math.random() * 220;

		particle.style.left = `${x}vw`;
		particle.style.bottom = `-${10 + Math.random() * 20}vh`;
		particle.style.width = `${size}px`;
		particle.style.height = `${size}px`;
		particle.style.animationDuration = `${duration}s`;
		particle.style.animationDelay = `${delay}s`;
		particle.style.setProperty("--drift-x", `${driftX}px`);
		particle.style.setProperty("--drift-y", `${driftY}px`);

		layer.appendChild(particle);
	}

	const moveFactor = 18;

	window.addEventListener("mousemove", (event) => {
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;
		const offsetX = (event.clientX - centerX) / centerX;
		const offsetY = (event.clientY - centerY) / centerY;

		card.style.transform = `translate3d(${offsetX * moveFactor}px, ${offsetY * moveFactor}px, 0)`;
	});

	window.addEventListener("mouseleave", () => {
		card.style.transform = "translate3d(0, 0, 0)";
	});
});
