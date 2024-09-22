window.onload = () => {
    document.querySelectorAll(".copy").forEach((element) => {
      const tooltip = document.createElement("span");
      tooltip.textContent = " [copy]";
      element.appendChild(tooltip);
  
      element.addEventListener("click", () => {
        try {
          navigator.clipboard.writeText(element.attributes["copy-text"]?.value);
          tooltip.textContent = " [copied]";
        } catch (error) {
          tooltip.textContent = " [error]";
        }
        setTimeout(() => (tooltip.textContent = " [copy]"), 1000);
      });
    });
  };