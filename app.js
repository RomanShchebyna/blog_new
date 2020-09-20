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
    
     
     
  
     
     let OpenModalbtn= document.querySelector(".openmodal button");
     console.log(OpenModalbtn);

    let SendMessage=document.querySelector(".form");
    console.log(SendMessage)



       function OpenModalSend(){
        //   e.preventDefault();
        SendMessage.classList.add("show");
        SendMessage.classList.remove("hide");
        OpenModalbtn.classList.add("hide");
        OpenModalbtn.classList.remove("show");

    }

    function CloseModalSend(){
        //   e.preventDefault();
        SendMessage.classList.add("hide");
        SendMessage.classList.remove("show");
        OpenModalbtn.classList.add("show");
        OpenModalbtn.classList.remove("hide");
        document.querySelectorAll('input, textarea').forEach(el=>el.value = '');
    }

   


     

      let CloseModalbtn=document.querySelector(".btn-close-message");
      console.log(CloseModalbtn)
    //  let formmesage= document.querySelector(".form");
    //  console.log(formmesage);

    //  function OpenModalmessage(){
    //     //  e.preventDefault();
    //     formmesage.classList.add("show");
    //     formmesage.classList.remove("hide")
    // }


    
    OpenModalbtn.addEventListener("click",OpenModalSend);
    CloseModalbtn.addEventListener("click",CloseModalSend);




    let timerId =setTimeout(OpenModal,10000);