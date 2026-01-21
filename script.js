// Data for options
const optionsData = {
    angles: [
        { label: "Low Angle", value: "Low angle shot, looking up, imposing presence" },
        { label: "High Angle", value: "High angle shot, looking down, overview" },
        { label: "Dutch Angle", value: "Dutch angle, tilted camera, chaotic energy" },
        { label: "Bird's Eye", value: "Bird's eye view, top-down shot, symmetrical" },
        { label: "Worm's Eye", value: "Worm's eye view, ground level shot, focus on details" },
        { label: "Over Shoulder", value: "Over-the-shoulder shot, POV style" },
        { label: "Silhouette", value: "Silhouette shot, backlit, high contrast" },
        { label: "Fisheye", value: "Fisheye lens, distorted perspective, 90s style" },
        { label: "Through Mic", value: "Close-up shot looking past the microphone" },
        { label: "Inside Drums", value: "Camera placed inside the drum kit" },
        { label: "From Crowd", value: "View from the audience, hype, crowded feeling" },
        { label: "Selfie Style", value: "Selfie angle, face close to camera, fisheye effect" }
    ],
    movements: [
        { label: "Static", value: "Static camera, tripod shot" },
        { label: "Handheld", value: "Dynamic handheld camera movement, camera shake" },
        { label: "Dolly In", value: "Slow dolly in, pushing towards subject" },
        { label: "Dolly Out", value: "Dolly out, revealing environment" },
        { label: "Tracking", value: "Tracking shot, following the subject" },
        { label: "Orbit / Arc", value: "Arc shot, camera orbits around subject" },
        { label: "Crash Zoom", value: "Fast crash zoom, intense impact" },
        { label: "Pan", value: "Slow panning shot, scanning the stage" },
        { label: "Drone FPV", value: "FPV drone shot, flying through the scene" },
        { label: "Spinning", value: "Top-down spinning camera shot, dizzying effect" },
        { label: "Whip Pan", value: "Fast whip pan transition, blur effect" },
        { label: "Bullet Time", value: "Bullet time effect, time frozen, camera moving around" }
    ],
    styles: [
        { label: "Cinematic 4K", value: "Cinematic lighting, 4k, highly detailed, photorealistic" },
        { label: "Music Video", value: "High energy music video style, strobe lights, smoke" },
        { label: "VHS / Retro", value: "VHS glitch effect, 90s camcorder style, low fidelity" },
        { label: "Film Grain", value: "16mm film grain, vintage look, nostalgic" },
        { label: "Anamorphic", value: "Anamorphic lens flare, sci-fi atmosphere, widescreen" },
        { label: "Black & White", value: "High contrast black and white, noir style" },
        { label: "Neon / Cyber", value: "Neon lighting, cyberpunk aesthetic, vibrant colors" },
        { label: "Dreamy", value: "Soft focus, dreamy atmosphere, bokeh, ethereal" },
        { label: "Anime Style", value: "Anime style, cel shaded, vibrant, 2D animation" },
        { label: "Claymation", value: "Claymation style, stop motion texture" }
    ]
};

// State
const state = {
    platform: "generic",
    subject: "Rock band performing live",
    negativePrompt: "",
    angle: "",
    movement: "",
    style: ""
};

// DOM Elements
const platformSelect = document.getElementById('platform');
const subjectInput = document.getElementById('subject');
const negativeInput = document.getElementById('negative-prompt');
const angleContainer = document.getElementById('angle-options');
const movementContainer = document.getElementById('movement-options');
const styleContainer = document.getElementById('style-options');
const finalPromptArea = document.getElementById('final-prompt');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const copyMessage = document.getElementById('copy-message');

// Initialize
function init() {
    renderOptions(optionsData.angles, angleContainer, 'angle');
    renderOptions(optionsData.movements, movementContainer, 'movement');
    renderOptions(optionsData.styles, styleContainer, 'style');

    updatePrompt();

    // Event Listeners
    platformSelect.addEventListener('change', (e) => {
        state.platform = e.target.value;
        updatePrompt();
    });

    subjectInput.addEventListener('input', (e) => {
        state.subject = e.target.value;
        updatePrompt();
    });

    negativeInput.addEventListener('input', (e) => {
        state.negativePrompt = e.target.value;
        updatePrompt();
    });

    copyBtn.addEventListener('click', copyToClipboard);
    clearBtn.addEventListener('click', resetState);
}

// Render Helper
function renderOptions(items, container, category) {
    container.innerHTML = '';
    items.forEach(item => {
        const el = document.createElement('div');
        el.className = 'option-card';
        el.textContent = item.label;
        el.dataset.value = item.value;
        el.onclick = () => selectOption(category, item.value, el, container);
        container.appendChild(el);
    });
}

// Selection Logic
function selectOption(category, value, element, container) {
    // Toggle logic
    if (state[category] === value) {
        state[category] = ""; // Deselect
        element.classList.remove('selected');
    } else {
        state[category] = value; // Select
        // Remove other selections in same category
        Array.from(container.children).forEach(child => child.classList.remove('selected'));
        element.classList.add('selected');
    }
    updatePrompt();
}

// Update Prompt Text
function updatePrompt() {
    const mainPromptParts = [
        state.subject,
        state.angle,
        state.movement,
        state.style
    ].filter(part => part && part.trim() !== "");

    let finalPrompt = mainPromptParts.join(", ");

    // Platform Specific logic
    if (state.platform === 'vidu') {
        // VIDU specific syntax if needed, currently generic works well but adding prefix for clarity
        // finalPrompt = `${finalPrompt}`; 
    } else if (state.platform === 'kling') {
        // Kling often benefits from aspect ratio flags, but we'll stick to prompt content for now
        if (state.negativePrompt) {
            finalPrompt += ` --negative_prompt "${state.negativePrompt}"`;
        }
    } else if (state.platform === 'seedream') {
        // Seedream logic
    }

    // Generic Negative Prompt Handling (if not handled by specific platform logic above)
    // Most web UIs act as "Negative Prompt" separate field, but for copy-paste convenience:
    if (state.negativePrompt && state.platform !== 'kling') { // Kling handles it inline above
        finalPrompt += `\n\n[Negative Prompt]: ${state.negativePrompt}`;
    }

    finalPromptArea.value = finalPrompt;
}

// Copy Function
function copyToClipboard() {
    finalPromptArea.select();
    document.execCommand('copy');

    // Show toast
    copyMessage.classList.add('show');
    setTimeout(() => {
        copyMessage.classList.remove('show');
    }, 2000);
}

// Reset Function
function resetState() {
    state.platform = "generic";
    state.subject = "Rock band performing live";
    state.negativePrompt = "";
    state.angle = "";
    state.movement = "";
    state.style = "";

    platformSelect.value = state.platform;
    subjectInput.value = state.subject;
    negativeInput.value = state.negativePrompt;

    // Clear visual selections
    document.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));

    updatePrompt();
}

// Run
init();
