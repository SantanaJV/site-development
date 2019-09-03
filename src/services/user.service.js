export { login, logout };

function login() {
  localStorage.setItem("loggedin", "12345");
}

function logout() {
  localStorage.removeItem("loggedin");
}
