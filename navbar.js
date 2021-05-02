document.getElementById('menuButton').addEventListener('click', () => {
  document.getElementById("menuContainer").style.display = "block";
  document.getElementById("menuButton").setAttribute('id', 'closeMenuButton');
});

document.getElementById('closeMenuButton').addEventListener('click', () => {
  document.getElementById("menuContainer").style.display = "none";
  document.getElementById("closeMenuButton").setAttribute('id', 'menuButton');
});



// function writeNavbar() {
//   window.document.write(`
//   <button id="menuButton" onclick="menu()">+</button>
//   <section id="menuContainer">
//     <li>
//       <button onclick="window.location.href='index.html';">ホーム</button>
//     </li>
//     <li>
//       <button onclick="window.location.href='thinkingskills.html';">
//         考えるスキル
//       </button>
//     </li>
//     <li>
//       <button onclick="window.location.href='selfmanagementskills.html';">
//         自己管理スキル
//       </button>
//     </li>
//     <li>
//       <button onclick="window.location.href='researchskills.html';">
//         リサーチスキル
//       </button>
//     </li>
//     <li>
//       <button onclick="window.location.href='educationpolicy.html';">
//         教育理念
//       </button>
//     </li>
//     <li>
//       <button onclick="window.location.href='others.html';">その他</button>
//     </li>
//   </section>");
// }