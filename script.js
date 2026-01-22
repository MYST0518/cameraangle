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
    scenes: [
        // Members
        { label: "Vocal: Mic Grip", value: "Vocalist gripping microphone tightly, singing with intense emotion, sweat on face, close-up", category: "Members" },
        { label: "Guitar: Shredding", value: "Close-up of guitarist's fingers on fretboard, fast solo, blurring motion, focus on hands", category: "Members" },
        { label: "Drummer: Front", value: "Frontal view of drummer hitting crash cymbal, hair flying, intense expression", category: "Members" },
        { label: "Bass: Groove", value: "Bassist rhythmically nodding, finger style picking, standing near drum riser", category: "Members" },
        { label: "Keyboards: Side", value: "Side profile of keyboardist playing synthesizer, hands visible, surrounded by keyboards", category: "Members" },
        { label: "Vocal: Reach", value: "Vocalist reaching hand out towards the audience, connecting with fans, emotional moment", category: "Members" },
        { label: "Guitar: Jump", value: "Guitarist jumping off the drum riser, mid-air freeze frame, energetic pose", category: "Members" },
        { label: "Back-to-Back", value: "Guitarist and Bassist playing back-to-back, leaning on each other, classic rock pose", category: "Members" },
        { label: "Drum: Stick Twirl", value: "Drummer twirling drumsticks between beats, showmanship, confident smile", category: "Members" },
        { label: "Vocal: Silhouette", value: "Silhouette of vocalist against bright majestic spotlight, raising microphone stand", category: "Members" },

        // Stage/Action
        { label: "Entrance: Shadow", value: "Band members walking onto stage from backstage shadows, backlit, anticipation", category: "Stage" },
        { label: "Pre-show Huddle", value: "Band members huddling together before the show, fist bump, unity", category: "Stage" },
        { label: "Final Bow", value: "Full band holding hands and bowing to the audience, end of show, gratitude", category: "Stage" },
        { label: "Call & Response", value: "Vocalist holding mic out to crowd, waiting for response, interactive moment", category: "Stage" },
        { label: "Headbanging", value: "Band members headbanging in synchronization, hair flying, heavy metal energy", category: "Stage" },
        { label: "Crowd Surf", value: "Singer crowd surfing on top of the audience hands, looking at ceiling", category: "Stage" },
        { label: "Confetti Pop", value: "Massive confetti explosion covering the stage, celebration, bright colors", category: "Stage" },
        { label: "Pyro Flames", value: "Pyrotechnic flames shooting up from stage floor, heat haze, dramatic lighting", category: "Stage" },
        { label: "Laser Scan", value: "Green laser beams scanning across the smoke-filled stage, futuristic atmosphere", category: "Stage" },
        { label: "Spotlight Search", value: "Spotlights searching the dark stage before landing on the lead singer", category: "Stage" },

        // Audience/Venue
        { label: "Front Row View", value: "POV from the front row looking up at the rockstar, screaming fans nearby", category: "Audience" },
        { label: "Crowd Jump", value: "Thousands of people jumping in unison, wave of energy, wide shot of venue", category: "Audience" },
        { label: "Phone Lights", value: "Sea of smartphone flashlights illuminating the dark arena, slow ballad atmosphere", category: "Audience" },
        { label: "Mosh Pit", value: "Circular mosh pit forming in the crowd, high energy movement, chaotic", category: "Audience" },
        { label: "Security Guard", value: "Stoic security guard watching the crowd, barrier in foreground, band blurry in background", category: "Audience" },
        { label: "Sound Desk", value: "View from the sound engineer's mixing desk, meters glowing, full stage view in distance", category: "Audience" },
        { label: "Stadium Back", value: "Wide shot from the very back of the stadium, showcasing the massive scale of the concert", category: "Audience" },
        { label: "Crowd POV", value: "POV of a fan raising hand with rock sign (horns), band in focus on stage", category: "Audience" },
        { label: "Crying Fan", value: "Emotional fan crying with joy in the front row, overwhelmed by the music", category: "Audience" },
        { label: "Merch Stand", value: "Long line of fans waiting at the merchandise stand, buying t-shirts", category: "Audience" },

        // Artistic/B-Roll
        { label: "Pedals", value: "Close-up of guitar effects pedals with red LEDs glowing, foot stepping on switch", category: "Artistic" },
        { label: "Setlist", value: "Paper setlist taped to the stage floor, handwritten song titles, slightly worn", category: "Artistic" },
        { label: "Snare Hit", value: "Slow motion close-up of drumstick hitting snare drum, resonance, dust flying", category: "Artistic" },
        { label: "Sweat", value: "Extreme close-up of sweat dripping from musician's face, intense physical performance", category: "Artistic" },
        { label: "Sunglasses", value: "Reflection of the cheering crowd seen in the vocalist's sunglasses", category: "Artistic" },
        { label: "Smoke Fog", value: "Thick fog rolling across the stage floor, mystical atmosphere, blue lighting", category: "Artistic" },
        { label: "Amp Glow", value: "Orange glow of the amplifier power tube in the dark, vintage equipment vibe", category: "Artistic" },
        { label: "Broken String", value: "Broken guitar string loose and hanging from the headstock, raw rock n roll", category: "Artistic" },
        { label: "Cymbal Splash", value: "Water splashing off a cymbal as it is struck, dynamic liquid motion", category: "Artistic" },
        { label: "Tuning", value: "Silhouette of a guitar tech tuning a guitar on the side of the stage", category: "Artistic" }
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

// Advanced State (New)
const advancedState = {
    shot: "",
    action: "",
    camera: "",
    lighting: "",
    format: "standard"
};

// Current Mode
let currentMode = "simple"; // 'simple' or 'advanced'

// DOM Elements
const platformSelect = document.getElementById('platform');
const subjectInput = document.getElementById('subject');
const negativeInput = document.getElementById('negative-prompt');
const scenesContainer = document.getElementById('scenes-container'); // NEW
const angleContainer = document.getElementById('angle-options');
const movementContainer = document.getElementById('movement-options');
const styleContainer = document.getElementById('style-options');
const finalPromptArea = document.getElementById('final-prompt');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const copyMessage = document.getElementById('copy-message');

// Advanced DOM Elements
const modeSimpleBtn = document.getElementById('mode-simple');
const modeAdvancedBtn = document.getElementById('mode-advanced');
const simpleBuilder = document.getElementById('simple-builder');
const advancedBuilder = document.getElementById('advanced-builder');

const advShotSelect = document.getElementById('adv-shot');
const advActionInput = document.getElementById('adv-action');
const advCameraSelect = document.getElementById('adv-camera');
const advLightingInput = document.getElementById('adv-lighting');
const advFormatSelect = document.getElementById('adv-format');

// Initialize
function init() {
    renderScenes(optionsData.scenes, scenesContainer); // NEW
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

    // Advanced Mode Event Listeners
    modeSimpleBtn.addEventListener('click', () => switchMode('simple'));
    modeAdvancedBtn.addEventListener('click', () => switchMode('advanced'));

    advShotSelect.addEventListener('change', (e) => {
        advancedState.shot = e.target.value;
        updatePrompt();
    });

    advActionInput.addEventListener('input', (e) => {
        advancedState.action = e.target.value;
        updatePrompt();
    });

    advCameraSelect.addEventListener('change', (e) => {
        advancedState.camera = e.target.value;
        updatePrompt();
    });

    advLightingInput.addEventListener('input', (e) => {
        advancedState.lighting = e.target.value;
        updatePrompt();
    });

    advFormatSelect.addEventListener('change', (e) => {
        advancedState.format = e.target.value;
        updatePrompt();
    });
}

// Mode Switching Logic
function switchMode(mode) {
    currentMode = mode;

    if (mode === 'simple') {
        modeSimpleBtn.classList.add('active');
        modeAdvancedBtn.classList.remove('active');
        simpleBuilder.classList.remove('hidden');
        advancedBuilder.classList.add('hidden');
    } else {
        modeSimpleBtn.classList.remove('active');
        modeAdvancedBtn.classList.add('active');
        simpleBuilder.classList.add('hidden');
        advancedBuilder.classList.remove('hidden');
    }
    updatePrompt();
}

// Render Scenes (Categorized)
function renderScenes(scenes, container) {
    container.innerHTML = '';

    // Group by category
    const categories = {};
    scenes.forEach(scene => {
        if (!categories[scene.category]) {
            categories[scene.category] = [];
        }
        categories[scene.category].push(scene);
    });

    // Render groups
    Object.keys(categories).forEach(catName => {
        const groupEl = document.createElement('div');
        groupEl.className = 'scene-category-group';

        const titleEl = document.createElement('h3');
        titleEl.textContent = catName;
        titleEl.className = 'category-title';
        groupEl.appendChild(titleEl);

        const gridEl = document.createElement('div');
        gridEl.className = 'options-grid';

        categories[catName].forEach(item => {
            const el = document.createElement('div');
            el.className = 'option-card';
            el.textContent = item.label;
            el.dataset.value = item.value;
            el.dataset.tooltip = item.value;
            // Scene selection updates the Subject input directly
            el.onclick = () => selectScene(item.value, el, container);
            gridEl.appendChild(el);
        });

        groupEl.appendChild(gridEl);
        container.appendChild(groupEl);
    });
}

function selectScene(value, element, container) {
    // Update state and input
    state.subject = value;
    subjectInput.value = value;

    // Manage visual selection state (radio behavior across all scenes)
    // First, clear all selected states in the scenes container
    const allCards = container.querySelectorAll('.option-card');
    allCards.forEach(card => card.classList.remove('selected'));

    // Select clicked
    element.classList.add('selected');

    updatePrompt();
}

// Render Helper
function renderOptions(items, container, category) {
    container.innerHTML = '';
    items.forEach(item => {
        const el = document.createElement('div');
        el.className = 'option-card';
        el.textContent = item.label;
        el.dataset.value = item.value;
        el.dataset.tooltip = item.value; // Tooltip content
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
// Update Prompt Text
function updatePrompt() {
    let finalPrompt = "";

    if (currentMode === 'simple') {
        const mainPromptParts = [
            state.subject,
            state.angle,
            state.movement,
            state.style
        ].filter(part => part && part.trim() !== "");
        finalPrompt = mainPromptParts.join(", ");
    } else {
        // Advanced Mode Logic
        const { shot, action, camera, lighting, format } = advancedState;

        // Remove empty values for checking
        const hasShot = shot && shot.trim() !== "";
        const hasAction = action && action.trim() !== "";
        const hasCamera = camera && camera.trim() !== "";
        const hasLighting = lighting && lighting.trim() !== "";

        if (format === 'standard') {
            // Standard: (shot), (action)...
            const parts = [];
            if (hasShot) parts.push(`(${shot})`);
            if (hasAction) parts.push(`(${action})`);
            if (hasCamera) parts.push(`(${camera})`);
            if (hasLighting) parts.push(`(${lighting})`);
            finalPrompt = parts.join(", ");
        } else if (format === 'structured') {
            // Structured: [Shot: ...] [Action: ...]
            const parts = [];
            if (hasShot) parts.push(`[Shot: ${shot}]`);
            if (hasAction) parts.push(`[Action: ${action}]`);
            if (hasCamera) parts.push(`[Camera: ${camera}]`);
            if (hasLighting) parts.push(`[Lighting: ${lighting}]`);
            finalPrompt = parts.join(" ");
        } else if (format === 'narrative') {
            // Narrative style
            let narrative = "";
            if (hasShot) narrative += `A ${shot} showing `;
            if (hasAction) narrative += `${action}`;
            else narrative += `a scene`;

            if (hasCamera) narrative += `, filmed with ${camera} movement`;
            if (hasLighting) narrative += `. Lighting is ${lighting}`;

            finalPrompt = narrative.trim();
        }
    }

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
