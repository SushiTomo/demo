$(document).ready(function(){

  $("#login_fb").click(function(){
    window.location.href = "home2.html";
  });

  $("#login_tw").click(function(){
    window.location.href = "/user/user_menu.html";
  });

  $(".course-link").click(function(){
    window.location.href = "course2.html";
  });

  $("#logo").click(function(){
    window.location.href = "home2.html";
  });

  $(".course-home").click(function(){
    window.location.href = "course2.html";
  });
  $(".doc").click(function(){
    window.location.href = "course-document.html";
  });
  $(".quiz").click(function(){
    window.location.href = "quiz.html";
  });
  $(".chat").click(function(){
    window.location.href = "chat.html";
  });
  $(".forum").click(function(){
    window.location.href = "forum.html";
  });
  $(".announcement").click(function(){
    window.location.href = "announcement.html";
  });
  $(".asgm").click(function(){
    window.location.href = "asgm.html";
  });
  $(".survey").click(function(){
    window.location.href = "survey.html";
  });
  $(".report").click(function(){
    window.location.href = "report.html";
  });

  /*MAIN MENU LINKS*/
  $("#cssmenu .home").click(function(){
    window.location.href = "home2.html";
  });
  $("#cssmenu .course").click(function(){
    window.location.href = "all_course.html";
  });
  $("#cssmenu .profile").click(function(){
    window.location.href = "basic_info.html";
  });
  $("#cssmenu .report").click(function(){
    window.location.href = "report.html";
  });
  $("#cssmenu .social").click(function(){
    window.location.href = "social.html";
  });
  $("#cssmenu .calendar").click(function(){
    window.location.href = "calendar.html";
  });
  $("#cssmenu .logout").click(function(){
    window.location.href = "logout.html";
  });
  $(".more").hide();
  $(".less").click(function(){
    $(".bottom_nav ul").hide( "slide", { direction: "down"  }, 2000 );
    $(".less").hide();
    $(".more").show();
  });
  $(".more").click(function(){
    $(".bottom_nav ul").show( "slide", { direction: "down"  }, 2000 );
    $(".less").show();
    $(".more").hide('fast');
  });     
});

