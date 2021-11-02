const emailEl = document.querySelector('.email');
const passawordEl = document.querySelector('.password');
const bLogin = document.querySelector(".login");

url = "https://private-3923c4-santandercoders809.apiary-mock.com/login";

// async function fetchJson() {
//   const response =  await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(),
//   });
//   return await response.json();
// }

async function fetchJson(url, options) {
  const response = await fetch(url, options)
  return response.json();
}

function requestToken(emailUser, passwordUser) {
  return fetchJson(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailUser, passwordUser),
    });
}

bLogin.addEventListener('click', loginIn)

async function loginIn(){
  const emailUser = emailEl.value;
  const passwordUser = passawordEl.value;
  console.log(emailUser);
  console.log(passwordUser);

  const response = await requestToken(emailUser,passwordUser);
  console.log(response);
  localStorage.setItem('token', response['token'])
}

// async function init() {
//   const response = await requestToken();
//   console.log(response);
//   localStorage.setItem('token', response['token'])
// }

// init();

//vilareal