function $(selector){
    return document.querySelector(selector)
}
function $$(selector){
    return document.querySelectorAll(selector)
}

$("header > .login").onclick = (e)=>{
    e.stopPropagation()
    $(".flip-modal").style.display = "block"
    console.log("11")
}

$('.flip-modal').addEventListener('click', function(e){
    e.stopPropagation()
    if(e.target.classList.contains('login')){
      $('.flip-modal').classList.remove('register')
      $('.flip-modal').classList.add('login') 
    }
    if(e.target.classList.contains('register')){
      $('.flip-modal').classList.add('register')
      $('.flip-modal').classList.remove('login') 
    }
    console.log(e.target)
    console.log(this)
    window.target = e.target
    if(e.target.classList.contains('close')){
      $('.flip-modal').style.display = 'none'
    }
  })