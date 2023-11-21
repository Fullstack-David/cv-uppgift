const button = document.getElementById("main");

button.addEventListener("animationiteration", listener);
button.addEventListener("click", listener);

function listener(event) {
	switch (event.type) {
		case "animationiteration":
			button.style.animationPlayState = "paused";
			break;
		case "click": {
			button.style.animationPlayState = "running";
			break;
		}
	}
}

button.classList.add("expandingAnimation");