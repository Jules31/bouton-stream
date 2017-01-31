$(document).ready(function() {
    console.log("Document pret");

    $("#zerator").click(function() {
        $("#live").attr("src", "https://www.twitch.tv/?channel=zerator");
        $("#tchat").attr("src", "https://www.twitch.tv/zerator/chat?popout=");
    });
    $("#domingo").click(function() {
        $("#live").attr("src", "https://player.twitch.tv/?channel=domingo");
        $("#tchat").attr("src", "https://www.twitch.tv/domingo/chat?popout=");
    });
    $("#sardochelol").click(function() {
        $("#live").attr("src", "https://player.twitch.tv/?channel=sardochelol");
        $("#tchat").attr("src", "https://www.twitch.tv/sardochelol/chat?popout=");
    });
}); // Ferme ici le document ready, tu n'en a plus besoin

/* $("#th").click(function(agrandir) {
     var container = $(this).parent().parent().parent();  CHIANT DE CHERCHER LE PARRENT DU PARRENT DU PARRENT
     $(container).removeClass("container");
     $(container).addClass("container-fluid");
     $("#live").width("100%");
     $("#live").height(700);
     $("#tchat").width("100%");
     $("#tchat").height(700);
 });*/

// je crée une fonction appelée par le bouton pour eviter d'écouter 
// le click du bouton TH comme tu avait fait

function agrandir() {
    if ($("#contentStream").hasClass("container")) {
        $('#contentStream').removeClass("container");
        $('#contentStream').addClass("container-fluid");
        $("#live").animate({ width: "100%" }, "slow");
    } else if ($("#contentStream").hasClass("container-fluid")) {
        $('#contentStream').removeClass("container-fluid");
        $('#contentStream').addClass("container");
        $("#live").animate({ width: "80%" });
    }
}