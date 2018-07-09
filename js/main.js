  const loginBtn = document.getElementById('loginBtn');
  const mainPage = document.getElementById('mainPage');
  const loginPage = document.getElementById('login');
  const profilePage = document.getElementById('profile');
  const balancePage = document.getElementById('getBalance');
  const menuPage = document.getElementById('menu');
  const userMail = document.getElementById('mailUser');

  // Login 
  loginBtn.addEventListener('click', () => {
    let mail = document.getElementById('userMail').value;
    let password = document.getElementById('pass').value;
    if (isValidEmail(mail) === true && isValidPass(password) === true && password.length <= 8 && password.length > 1) {
      mainPage.classList.remove('page');
      loginPage.classList.add('noneLogin');
      userMail.innerHTML = mail;
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

  const goBalancePage = () => {
    if (balancePage.className === 'page') {
      balancePage.classList.remove('page');
      menu.classList.add('page');
      profilePage.add('page');
    } else {
      menu.classList.add('page');
      profilePage.add('page');
    }
  }

  const goProfilePage = () => {
    if (profilePage.className === 'page') {
      profilePage.classList.remove('page');
      menu.classList.add('page');
      balancePage.add('page');
    } else {
      menu.classList.add('page');
      balancePage.add('page');
    }
  }

  // Guardar tarjetas Bip
  const addBtn = document.getElementById('addBtn');
  const bipDiv = document.getElementById('bips');
  const selectBip = document.getElementById('addedBips');

  addBtn.addEventListener('click', () => {
    let bipNumber = document.getElementById('bipNumber').value;
    console.log(bipNumber);
    bipDiv.innerHTML += bipBumber;
    let addBip = selectBip.createElement('option');
    addBip.text = bipNumber;
    selectBip.add(addBip);
  })

  // Consultar Saldo Bip
  const getBip = (bipNumber) => {
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
