$(document).ready(function(){$('.box').css("background", "url(images/img" + 1 + ".jpg)").css("background-size", "cover").css("background-position", "center").css("height", "100vh").css("width", "auto")
var i = 1;
if (i == 1) { $(".btn-left").hide(); }
$(".btn-right").click(function () {
    i++;
    if (i >= 2 && i<=5) { $(".btn-left").show(); }
    if (i >= 2 && i<5) { $(".btn-right").show(); }
    $('.box').css("background", "url(images/img" + i + ".jpg)").css("background-size", "cover").css("background-position", "center").css("height", "100vh").css("width", "auto")
    document.querySelector('#check'+i).checked=true
    if (i >= 5) $(".btn-right").hide();
})
$(".btn-left").click(function () {
    i--;
    if (i >= 2 && i<=5) { $(".btn-left").show(); }
    if (i >= 2 && i<=5) { $(".btn-right").show(); }
    if (i == 1) { $(".btn-left").hide(); }
    $('.box').css("background", "url(images/img" + i + ".jpg)").css("background-size", "cover").css("background-position", "center").css("height", "100vh").css("width", "auto")
    document.querySelector('#check'+i).checked=true
})
});




