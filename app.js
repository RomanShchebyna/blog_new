let mobileMenu= document.querySelector(".nav-mobile-menu")
console.log(mobileMenu);
let mainMenu= document.querySelector(".navigation")
console.log(mainMenu);

mobileMenu.addEventListener("click",function(){
   mobileMenu.classList.toggle("active-menu"); 
   if(mobileMenu.classList.contains("active-menu")){
       mainMenu.classList.add("active-menu");
   }else{
       mainMenu.classList.remove("active-menu")
   }

})




let autorization= document.querySelector(".autorization");
let closeBtn=document.querySelector(".btn-close")

// moredetails.forEach(function(btn){
//     btn.addEventListener("click",OpenModal)
//     })
    
    function OpenModal(){
        //  e.preventDefault();
        autorization.classList.add("show");
        autorization.classList.remove("hide")
    }

    function OpenModalSend(){
        //  e.preventDefault();
        autorization.classList.add("show");
        autorization.classList.remove("hide")
    }

    
    function closeModal(){
        autorization.classList.add("hide")
        autorization.classList.remove("show")
    }
    closeBtn.addEventListener("click",closeModal)
    
    autorization.addEventListener("click",function(e){
       if(e.target==autorization){
          closeModal();
       }
    })
    

    function showModalByscroll(){
        if(window.pageYOffset > document.documentElement.scrollHeight/2){
         
           OpenModal()
           removeEventListener("scroll",showModalByscroll)
         
        }
     }
     
     window.addEventListener("scroll",showModalByscroll)
    
     let openmodalbtn= document.querySelector(".openmodal button");
     console.log(openmodalbtn);

     openmodalbtn.addEventListener("click",OpenModal);

     