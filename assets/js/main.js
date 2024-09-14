const accordionContainers = document.querySelectorAll(".accordion-container");
const panels = document.querySelectorAll(".panel");

// Expand the first panel by default
panels[0].style.maxHeight = panels[0].scrollHeight + "px";
accordionContainers[0].classList.add("active");

// Add event listener to each accordion container
accordionContainers.forEach((accordionContainer, index) => {
  accordionContainer.addEventListener("click", () => {
    // Toggle the 'active' class to show or hide the content
    accordionContainer.classList.toggle("active");

    // Get the corresponding panel
    const panel = accordionContainer.nextElementSibling;

    // Expand or collapse the panel
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // Collapse
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // Expand
    }
  });
});
