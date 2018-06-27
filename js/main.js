
// Login 
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
  let mail = document.getElementById('userMail').value;
  let password = document.getElementById('pass').value;
  if(isValidEmail(mail) === true && isValidPass(password) === true && password.length <= 8) {
    window.location.href = '../main.html';
  } else {
    alert('Ingrese datos válidos')
  }
})

const isValidEmail = (mail) => { 
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}

const isValidPass = (password) => {
  return /^([0-9])*$/.test(password);
}


/*

let bipNumber = document.getElementById('bipNumber');
const bipBtn = 23466084; //document.getElementById('addBtn');

const showBips = () => {
  bipBtn.addEventListener('submit', () => {
    document.getElementById('bips').innerHTML += bipNumber;
  })
}




const getBip = () => {
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${bipNumber}`)
    .then((response) => {
      return response.json()
    }).then((data) => { 
      console.log(data);
    })
    .catch((fail) => {
      console.log('Tuvimos un error procesando tu información')
    })
}

*/