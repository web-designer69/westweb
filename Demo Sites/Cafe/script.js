const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");

// =========================
// MENU
// =========================

function openMenu() {
    sideMenu.classList.add("open");
    menuOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeMenuPanel() {
    sideMenu.classList.remove("open");
    menuOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

if (menuButton) {
    menuButton.addEventListener("click", openMenu);
}

if (closeMenu) {
    closeMenu.addEventListener("click", closeMenuPanel);
}

if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenuPanel);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenuPanel();
    }
});


// =========================
// FAKE ACCOUNT SYSTEM
// =========================

function isSignedIn() {
    return localStorage.getItem("commonGroundSignedIn") === "true";
}


// =========================
// UPDATE TOP-RIGHT BUTTON
// =========================

const accountButton = document.getElementById("accountButton");

if (accountButton && isSignedIn()) {
    accountButton.href = "profile.html";
    accountButton.textContent = "♙";
    accountButton.classList.add("profile-icon");
}


// =========================
// SIGN UP
// =========================

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;

        localStorage.setItem("commonGroundSignedIn", "true");
        localStorage.setItem("commonGroundName", name);
        localStorage.setItem("commonGroundEmail", email);

        window.location.href = "profile.html";
    });
}


// =========================
// SIGN IN
// =========================

const signinForm = document.getElementById("signinForm");

if (signinForm) {
    signinForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("signinEmail").value;

        localStorage.setItem("commonGroundSignedIn", "true");
        localStorage.setItem("commonGroundEmail", email);

        // If there isn't already a saved name, use a simple guest name
        if (!localStorage.getItem("commonGroundName")) {
            localStorage.setItem("commonGroundName", "Common Ground Guest");
        }

        window.location.href = "profile.html";
    });
}


// =========================
// SIGN OUT
// =========================

const signoutButton = document.getElementById("signoutButton");

if (signoutButton) {
    signoutButton.addEventListener("click", () => {

        localStorage.removeItem("commonGroundSignedIn");

        window.location.href = "index.html";
    });
}

// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        contactForm.reset();

        if (contactSuccess) {
            contactSuccess.classList.add("show");
        }
    });
}

// =========================
// PROFILE DETAILS
// =========================

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profileWelcome = document.getElementById("profileWelcome");

if (profileName && profileEmail) {

    const savedName =
        localStorage.getItem("commonGroundName") ||
        "Common Ground Guest";

    const savedEmail =
        localStorage.getItem("commonGroundEmail") ||
        "guest@example.com";

    profileName.textContent = savedName;
    profileEmail.textContent = savedEmail;

    if (profileWelcome) {
        profileWelcome.innerHTML =
            `Welcome, ${savedName}.`;
    }
}

// =========================
// WESTWEB RETURN BUTTON
// =========================

const westwebReturn = document.getElementById("westwebReturn");

setTimeout(() => {
    if (westwebReturn) {
        westwebReturn.classList.add("show");
    }
}, 3000);

if (westwebReturn) {
    westwebReturn.addEventListener("click", () => {
        window.location.href = "../../Source/index.html";
    });
}