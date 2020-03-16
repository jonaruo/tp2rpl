var username = [];
var password = [];

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputCPassword = document.querySelector("#cpassword");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputPassword = inputPassword.value;
    const valueInputCPassword = inputCPassword.value;
    const valueInputUsername = inputUsername.value;

    let flag = 0;


	if (valueInputCPassword === valueInputPassword){
		flag = 1;
			username = valueInputUsername;
			password = valueInputPassword;
	}else{
		flag = 0;
	}


    const warningMsg = document.querySelector(".warning");

    if (flag === 0){
        warningMsg.className = "text-danger";
    } else {
        alert("Selamat anda masuk ke home");
		console.dir(username);
		console.dir(password);
    }
})

