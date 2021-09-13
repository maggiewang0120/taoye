

$(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20)  {
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
    $("div.sign_up").fadeIn();



    //=====忘記密碼======
      var sign_up = document.getElementsByClassName("sign_up")[0];
      var forgot_password = document.getElementById("forgot_password");
      var btn_return = document.getElementsByClassName("btn_return")[0];
  
      forgot_password.addEventListener("click", function(){

        // console.log (sign_up);
        sign_up.innerHTML = `<article class = "sign_up_content">
          <button class="close" type="button">
              
              <span class="-hr -top"></span>
              <span class="-hr -bottom"></span>
          </button>
          <div>
              <div class="logo">
                <img src="../logog/logo.svg">
              </div>
              <h1>重新設定密碼</h1>
              <p>請輸入你註冊時的 Email，我們會發送一封信件，點擊信件中的連結以重設密碼。</p>
              <p>找不到認證信時，請到「垃圾信件」分類查找，或在信箱搜尋「陶冶」。</p>
          </div>

          <form action="">
              <input type="text" id="" placeholder="電子郵件" value=""></label>
              
              <button type="submit">發送認證信</button>

          </form>

          <div>
            
            <p>還不是會員嗎？<a href="button">立刻註冊新帳號</a></p>
            <p class="btn_return">返回上一頁</p>
          </div>
          
        </article>`;
        
      });
  });
  
  $(document).on("click", "button.close", function(){
    $("div.sign_up").fadeOut();

    var sign_up = document.getElementsByClassName("sign_up")[0];
    var forgot_password = document.getElementById("forgot_password");
    var btn_return = document.getElementsByClassName("btn_return")[0];
  
    forgot_password.addEventListener("click", function(){

    sign_up.innerHTML = `<article class = "sign_up_content">
          <button class="close" type="button">
              
              <span class="-hr -top"></span>
              <span class="-hr -bottom"></span>
          </button>
          <div>
              <div class="logo">
                <img src="../logog/logo.svg" >
              </div>
              <h1>會員登入</h1>
          </div>

          <form action="">
              <input type="text" id="" placeholder="電子郵件或手機號碼" value=""></label>
              <input type="email" placeholder="請輸入密碼"></label>
              <button type="submit">登入</button>
  
          </form>

          <div>
            <p id="forgot_password"> 忘記密碼</p>
            <p>還不是會員嗎？<a href="button">立刻註冊新帳號</a></p>
            
          </div>
          
        </article>`;

  });
 });
});
     
