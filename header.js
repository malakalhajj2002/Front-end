$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".navbar-collapse").toggle();
    });
});


// $(document).ready(function(){
//     $(".fas.fa-search").click(function(){
//         // open input field
//         $(".search-box").css("display", "inline-block");
//         $(".fas fa-user-circle").css("padding-left", 40);
//         $(".fas fa-shopping-cart").css("padding-left", 40);

//     });
// });


$(window).scroll(function(){
    if($(window).scrollTop() > 60){
        $(".navbar").css("flex-direction", "row").fadeIn(2000);
        
    }
    else{
        $(".navbar").css("flex-direction", "column").fadeIn(2000);
    }
});



// onclick on btn1 open shop.html
$(document).ready(function(){
    $(".btn1").click(function(){
        window.location.href = "shop.html";
    });
});


