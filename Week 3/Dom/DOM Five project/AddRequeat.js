var istatus = document.querySelector("h5")

var btn = document.querySelector('#add')

check = 0 ;

btn.addEventListener('click',function(){
    if( check == 0){
       istatus.innerHTML = 'Freinds'
       istatus.style.color = 'green'
       btn.innerHTML = 'Remove Friend'
       check = 1 
    }else {
        istatus.innerHTML = 'stanger'
        istatus.style.color = 'red' 
        btn.innerHTML = 'add Friend'
        check = 0
    } 
})









// var removeFriend = document.querySelector('#remove') 
// removeFriend.addEventListener('click', function() {
//     istatus.innerHTML = 'stanger'
//     istatus.style.color = 'red' 
// })
