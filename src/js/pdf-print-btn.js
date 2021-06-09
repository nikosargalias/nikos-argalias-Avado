window.addEventListener("DOMContentLoaded", (event) => {
  const printBtn = document.getElementById("print-btn");

  printBtn.addEventListener("click", () => {
    window.print();
  });
});
