var elem = document.querySelectorAll('.elem')

elem.forEach(function (val) {
    val.addEventListener('mouseenter', function(){
        console('enter')
    })
    val.addEventListener('mouseleave', function(){
        console('enter leave')
    })
})