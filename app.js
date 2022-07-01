// Pages
const about = `<h1>About page</h1>`;
const contact = `<h1>Contact page</h1>`;
const home = `<h1>Home page</h1>`;

// routes
const routes = {
  "/": home,
  "/contact": contact,
  "/about": about,
};

// Populate shell
const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname]; // current page's URI
console.log(window.location.pathname);

// Navigation logic
const onNavigate = (pathname) => {
  // We don't load a page at all.
  // Instead we just make a cosmetic change in the URL
  // bar and save SPA location to history for easy navigation
  window.history.pushState({}, "", window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

// Note: This is one way routing, i.e. changing URL manually won't route anywhere.
