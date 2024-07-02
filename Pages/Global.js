// Menu data structure
export const menuLinks = [
  { text: "home", href: "./index.html" },
  {
    text: "about me",
    href: "#",
  },
  {
    text: "services",
    href: "./Services.html",
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { classname: "signin", text: "sign in", href: "./Login.html" },
    ],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const topMenuEl = document.getElementById("top-menu");
  const subMenuEl = document.getElementById("sub-menu");

  // Set styles for top menu
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");

  // Set styles for sub menu
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";

  // Build top menu
  menuLinks.forEach(function (link) {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);

    // Handle "Services" menu option
    // console.log("In Global.js before listener", link.text.toLowerCase() )
    if (link.text.toLowerCase() === "services") {
      a.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = link.href;
      });
    }
    // Direct navigation for specific links
    if (link.text.toLowerCase() === "home") {
      a.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = link.href;
      });
    }
  });

  const topMenuLinks = topMenuEl.querySelectorAll("a");

  topMenuEl.addEventListener("click", function (event) {
    event.preventDefault();

    if (!event.target.matches("a")) return;

    event.target.classList.toggle("active");

    topMenuLinks.forEach(function (link) {
      if (link !== event.target) {
        link.classList.remove("active");
      }
    });

    if (event.target.classList.contains("active")) {
      const linkObject = menuLinks.find(function (link) {
        return link.text === event.target.textContent.toLowerCase();
      });

      if (linkObject && linkObject.subLinks) {
        buildSubMenu(linkObject.subLinks);
        subMenuEl.style.top = "100%";
      } else {
        subMenuEl.style.top = "0";
      }
    } else {
      subMenuEl.style.top = "0";
    }
  });
  

  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = "";

    subLinks.forEach(function (subLink) {
      // console.log(subLink);
      const a = document.createElement("a");
      a.setAttribute("href", subLink.href);
      a.textContent = subLink.text;
      a.classList.add(subLink.classname);
      subMenuEl.appendChild(a);
    });
    // console.log("Submenu element after creation:", subMenuEl);
  }
  console.log("Global.js loaded");
});
