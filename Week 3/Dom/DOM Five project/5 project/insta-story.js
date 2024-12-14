var arr = [
    { dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x1uCKPCMKyHbDixV3Jfdrpsngf2lnONrzg&s" ,
      story: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5r82bJTGqr9YmMiAur8rnh41AsmUzWiSOdA&s" ,
      story: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28kRh_fU98N_6B0uX_AhlVHOJPv7SPTD6nw&s" ,
      story: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3W467LCoHkFmWNBQywa3B3jS3-0gBzN1lAw&s" ,
      story: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=400"
    },


]
var storiyan = document.querySelector('#storiyan')

var cultter = ""
arr.forEach( function(elem,idx) {
      cultter += `<div id="story">
                    <img id="${idx}" src="${elem.dp}" alt="">
                  </div>`
})

storiyan.innerHTML = cultter ;

storiyan.addEventListener('click', function(dets){
    document.querySelector("#full-screen").style.display = 'block'

    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
      document.querySelector("#full-screen").style.display = 'none'
    }, 4000)
})
