function onLoginUser() {
    var elName = document.querySelector('.username-input');
    var elPass = document.querySelector('.password-input');
    var loggedInUser = doLogin(elName.value, elPass.value)
    if (!loggedInUser) return

   
    document.querySelector('.login-section').style.display = 'none';
    document.querySelector('.after-log').style.display = 'block';

    document.querySelector('.after-log h1 span').innerText = loggedInUser.username
    document.querySelector('.img-after').innerHTML = loggedInUser.img


    if (loggedInUser.isAdmin) { 
        console.log('loggedInUser.isAdmin', loggedInUser.isAdmin);
        document.querySelector('.admin-btn').classList.remove('hide')
    }

    elName.value = ''
    elPass.value = ''
}


function onLogoutUser() {
    doLogout()
    document.querySelector('.login-section').style.display = 'block';
    document.querySelector('.after-log').style.display = 'none';
    document.querySelector('.after-log h1 span').innerText = ''
    document.querySelector('.img-after').innerHTML = ''
    document.querySelector('.admin-btn').classList.add('hide')
}


function onAdminLogin() {
    var user = loadFromStorage('currLoggenInUser')
    if (user && user.isAdmin) {
        window.location = 'admin.html'
    } 
    
    document.querySelector('.admin-btn').classList.remove('hide')

}