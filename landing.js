function $(selector){
    return document.querySelector(selector)
}
function $$(selector){
    return document.querySelectorAll(selector)
}

$("header .login").onclick = function(e){
  e.stopPropagation()
  $(".flip-modal").style.display = "block";
}

$(".flip-modal").addEventListener("click",(e)=>{
  console.log(e.target)
  if(e.target.classList.contains('login')){
    $(".flip-modal").classList.remove("register")
   $(".flip-modal").classList.add("login")
  }else if(e.target.classList.contains('register')){
    $(".flip-modal").classList.remove("login")
    $(".flip-modal").classList.add("register")
  }
  window.target = e.target
  if(e.target.classList.contains('close')){
    $('.flip-modal').style.display = 'none' 
  }
})

$(".modal-login form").addEventListener("submit",function(e){
  e.preventDefault()
  if(!/^\w{3,8}$/.test($(".modal-login input[name=username]").value)){
    $(".errormsg").innerText = "您输入的用户名要在3到8个字符之间哦～";
    return false
  }
  if(!/^\w{6,10}$/.test($(".modal-login input[name=password]").value)){
    $(".errormsg").innerText = "您输入的密码要在6到10个字符之间哦～";
    return false
  }
  this.submit()
})

$(".modal-register form").addEventListener("submit",function(e){
  e.preventDefault()
  if(!/^\w{3,8}$/.test($(".modal-register input[name=username]").value)){
    $(".modal-register .errormsg").innerText = "您输入的用户名要在3到8个字符之间哦～"
    console.log($(".modal-register input[name=username]").value)
    return false
  }
  if(!/^\w{6,10}$/.test($(".modal-register input[name=password]").value)){
    $(".modal-register .errormsg").innerText = "您输入的密码要在6到10个字符之间哦～"
    return false
  }
  if($('.modal-register input[name=password2]').value !== $('.modal-register input[name=password]').value){
    $(".modal-register .errormsg").innerText = "两次输入的密码不一致"
    return false
  }
  this.submit()
})

