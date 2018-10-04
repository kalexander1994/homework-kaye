
//header image change w refresh//
var bgColorArray = ['https://static-media.fox.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/37/957/BobsBurgers_7ASA23.jpg?fit=inside%7C528:297','https://cnet4.cbsistatic.com/img/uh_tdX9PxbhKwFTbGy2kfrhhRv4=/2017/10/04/6290a252-4a8e-43d0-b469-ad36987c4c2a/bobsburgerscrop.jpg', 'https://img.huffingtonpost.com/asset/58bec69c1500003716abda64.jpeg?ops=scalefit_720_noupscale'],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];



$('.bgimage').css('background', 'url(' + selectBG + ')')






//popups//





//popup1 burger1//
$(".open").on("click", function(){
  event.preventDefault;
  $(".popup-overlay, .popup-content").addClass("active");
});
$(".close, .popup-overlay").on("click", function(){
  $(".popup-overlay, .popup-content").removeClass("active");
});
