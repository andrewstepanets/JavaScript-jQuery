//
function checkUsername() {
  var username = el.value; //
  if (username.length < 5) {
    elMsg.className = 'text-danger';
    elMsg.textContent = 'Username too short...';
  } else {
    elMsg.textContent = '';
  }
}

function tipUsername() {
  elMsg.className = 'text-dark';
  elMsg.innerHTML = 'Username must consist at least 5 symbols';
}

var el = document.getElementById('formUsername');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);
