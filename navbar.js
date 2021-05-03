function navEvent() {
  const mC = document.getElementById("menuContainer");
  const mB = document.getElementById('menuButton');
  const cMB = document.getElementById('closeMenuButton');
  if (mC.style.display === "block") {
    cMB.setAttribute('id', 'menuButton');
    mC.style.display = "none";
  } else {
    mB.setAttribute('id', 'closeMenuButton');
    mC.style.display = "block";
  }
}