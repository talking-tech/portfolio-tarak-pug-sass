import "../styles/main.sass";
import closeMenu from "./closeMenu.js";
import swapRoles from "./swapRoles.js";

//After Document Loads DOM loaded
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    //All function calls starts here

    const myButton = document.getElementById("nav_list");
    myButton.addEventListener("click", closeMenu, false);

    setInterval(() => {
      swapRoles();
    }, 2000);
    //All function calls ends here
  }
};
