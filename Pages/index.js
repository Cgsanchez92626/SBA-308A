document.addEventListener("DOMContentLoaded", function () {
  // Select and cache the <main> element
  const mainEl = document.querySelector("main");

  // Set the background color of mainEl using CSS custom property
  mainEl.style.backgroundColor = "var(--main-bg)";

  // Create the elements
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const h4 = document.createElement("h4");
  const div = document.createElement("div");
  const hr = document.createElement("hr");
  const strong = document.createElement("strong");
  const em = document.createElement("em");

  // Set attributes
  hr.style.marginTop = "70px"; // Adjust margin top to move the image down
  img.id = "myLogo";
  img.src = "/Images/PremierRealtyAssociates_logo jpg.jpg";
  img.height = "200px";
  img.width = "300px";
  img.style.flexDirection = "column";
  img.style.alignItems = "center"; // Center align items horizontally

  // Set inline styles
  img.style.display = "flex";
  img.style.border = "2px solid black";
  img.style.marginTop = "70px"; // Adjust margin top to move the image down
  img.style.padding = "10px";
  img.style.backgroundColor = "#f3eded";
  img.style.boxShadow = "10px 10px 1px rgba(117, 115, 115, 0.3)";
  img.style.animation = "mymove 5s infinite";

  // Set the content of mainEl to <h1>CSREI Group</h1>
  h1.textContent = "CSREI Group";
  h4.textContent =
    "Providing Services in Commercial And Residential Real Estate Investment guidance";

  div.id = "services";
  div.innerHTML = `
    <section>Residential</section>
    <section>Commercial</section>
    <section>Real Estate Investing</section>
    `;
  strong.appendChild(em);
  em.textContent = "Coming Soon";
  // Append elements to main
  mainEl.appendChild(img);
  mainEl.appendChild(h1);
  mainEl.appendChild(h4);
  mainEl.appendChild(div);
  mainEl.appendChild(hr);

  // Create a DocumentFragment to hold the new nodes for the footer
  const fragment = document.createDocumentFragment();
  // Append footer div and strong element
  const footerDiv = document.createElement("div");
  footerDiv.className = "footer";
  footerDiv.appendChild(strong);
  mainEl.appendChild(footerDiv);

  // mainEl.appendChild(document.createElement("div")).className = "footer";
  // mainEl.querySelector(".footer").appendChild(strong);
});
