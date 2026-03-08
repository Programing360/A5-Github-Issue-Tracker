document.getElementById('login-btn').addEventListener('click', () => {
    const userName = document.getElementById('userName')
    const userValue = userName.value;
    const userPassword = document.getElementById('userPassword')
    const passValue = userPassword.value;

    const admin = (userValue === 'admin' && passValue === 'admin123')
    if(!admin){
        alert('Incurrent name and Password')
    }

    if(admin){
        alert('Login Successful')
        window.location.assign('index.html')
    }

})