var istatus = document.querySelector("h5")

var addFriend = document.querySelector('#add')

check = 0 ;

addFriend.addEventListener('click',function(){
    if( check == 0){
       istatus.innerHTML = 'Freinds'
       istatus.style.color = 'green'
       check = 1 
    }else {
        istatus.innerHTML = 'stanger'
        istatus.style.color = 'red' 
        check = 0
    } 
})









// var removeFriend = document.querySelector('#remove') 
// removeFriend.addEventListener('click', function() {
//     istatus.innerHTML = 'stanger'
//     istatus.style.color = 'red' 
// })
