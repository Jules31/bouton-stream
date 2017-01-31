$(document).ready(function(){
    console.log("Document pret");

    $("#zerator").click(function(){
      $("#live").attr("src", "https://www.twitch.tv/?channel=zerator");
      $("#tchat").attr("src", "https://www.twitch.tv/zerator/chat?popout=");
    });
    $("#domingo").click(function(){
      $("#live").attr("src", "https://player.twitch.tv/?channel=domingo");
      $("#tchat").attr("src", "https://www.twitch.tv/domingo/chat?popout=");
    });
    $("#sardochelol").click(function(){
      $("#live").attr("src", "https://player.twitch.tv/?channel=sardochelol");
      $("#tchat").attr("src", "https://www.twitch.tv/sardochelol/chat?popout=");
    });

    $("#th").click(function(agrandir){
      var container = $(this).parent().parent().parent();
      $(container).removeClass("container");
      $(container).addClass("container-fluid");
      $("#live").width(1440);
      $("#live").height(700);
      $("#tchat").width(450);
      $("#tchat").height(700);
    });
});    