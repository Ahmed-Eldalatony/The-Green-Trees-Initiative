  const tabs = document.querySelectorAll(".tab-group li");
  const tabValues = document.querySelectorAll(".tab-value");
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      const tabDataFilter = tab.getAttribute("data-filter");
      document.documentElement.style.setProperty("--move", +index * 6 + "rem");
      tabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");
      tabValues.forEach((tabValue) => {
        tabValue.style.display = "none";
        if (tabValue.id === tabDataFilter) {
          tabValue.style.display = "block";
        }
        if (tabValue.getAttribute("data-filter") === tabDataFilter) {
          tabValue.style.display = "block";
        }
      });
    });
  });