

    $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0)  {
         $('.header').addClass('-scroll-down')
      } else {
          $('.header').removeClass('-scroll-down');
      }
      
    });

     
  });
  
  

  $(function(){

    // 點擊按鈕，選單縮放
    $("button.hamburger_icon").on("click", function(){
      $("div.global_nav").slideToggle();
      $(this).toggleClass("-on");
      
    });
  });



// =======會員登入=======

  
 

  $(function(){

    $(document).on("click", "a.btn_member", function(){
      $("div.sign_up").show();
      $(".sign_up_content").fadeIn();
    });

    $("#forgot_password").on("click",function(){
      $(".forgot_password_content").fadeIn();
      $(".sign_up_content").fadeOut();
    });

    $(document).on("click", "button.close", function(){
      $(".forgot_password_content").fadeOut();
      $("div.sign_up").hide(); 
    });

    $("#return").on("click",function(){
      $(".sign_up_content").fadeIn();
      $(".forgot_password_content").fadeOut();

    });
});
     
