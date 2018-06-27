window.onload = () => {
  getBip();
}



// Botón que maneja la visualización de la barra lateral
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

// Login 
let mail = document.getElementById('userMail');
let bipNumber = document.getElementById('bipNumber');
const bipBtn = document.getElementById('addBtn');

const showBips = () => {
  bipBtn.addEventListener('submit', () => {
    document.getElementById('bips').innerHTML+= bipNumber;
  })
}

const getBip = () => {
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${bipNumber}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);  
  })
}