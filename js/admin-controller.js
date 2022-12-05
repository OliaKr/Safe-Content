'use strict'

function init() {
    renderUsersTable('users-table')
    // renderCards('')
    var user = getLoggedInUser();
    if(user) document.querySelector('h1 span').innerText = user.username
}

var gUsers = loadFromStorage('safeConectDB')


function renderUsersTable(selector) {

    var strHTML = `<table border="1"><tbody><th> username</th><th>password</th><th>lastLoginTime</th><th>IsAdmin</th> `;

    for (var i = 0; i < gUsers.length; i++) {
        strHTML += '<tr>';
        var user = gUsers[i]
        var name = user.username
        var password = user.password
        var lastLogin = user.lastLoginTime
        var isAdmin = user.isAdmin
        strHTML += `<td>${name}</td> <td>${password}</td> <td>${lastLogin}</td> <td>${isAdmin}</td> </tr>`
    }
    strHTML += '</tbody></table>';
    document.querySelector((`.${selector}`)).innerHTML = strHTML;
}

function renderCards(selector) {
    var users = createUsersMat()
    var strHTML = ''
    for (var i = 0; i < gUsers.length; i++) {
        strHTML += `<div class="card">`
        for (var j = 0; j < 4; j++) {
            strHTML += `<p>${users[i][j]}</p> `
        }
        strHTML += `</div>`
        console.log(strHTML);
    }
    document.querySelector(`.${selector}`).innerHTML = strHTML;

}

var test = createUsersMat()
console.log(test);


function onLogoutAdmin() {
    document.querySelector('.logout-button').classList.add('hide')
    doLogout()
}

function onSetFilter(filterBy) {
    // console.log('Filtering By:', filterBy);
    setFilter(filterBy);
}

function setFilter(filterBy) {
    if (filterBy === 'TABLE') {
        renderUsersTable('users-table')
    } else {
        renderCards('users-table')
    }
}

