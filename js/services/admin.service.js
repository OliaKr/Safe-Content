'use strict'


function onSetSort(sortBy) { //adm c
 
    gUsers.sort(function (user1, user2) {
        if (sortBy === 'name') {
            if (user1.username.toLowerCase() > user2.username.toLowerCase()) return 1
            if (user1.username.toLowerCase() < user2.username.toLowerCase()) return -1
            return 0
        } else if (sortBy === 'last-login') return user1.lastLoginTime - user2.lastLoginTime
        else return user1.id - user2.id
    })
    _saveUsersToStorage()
    console.log(gUsers);
    renderUsersTable('users-table')
}


function doLogout() {
    saveToStorage('currLoggenInUser', '')
    _saveUsersToStorage()
    init()
    window.location = 'index.html'
}


function createUsersMat() {
    var mat = []
    for (var i = 0; i < gUsers.length; i++) {
        mat[i] = []
        var user = gUsers[i]
        mat[i][0] = user.username
        mat[i][1] = user.password
        mat[i][2] = user.lastLoginTime
        mat[i][3] = user.isAdmin
    }
    return mat
}