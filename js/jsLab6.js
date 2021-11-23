// Câu 1

// function setLang(code) {
//     window.localStorage.getItem('lang', code);
//     location.reload();
// };

// function getLang() {
//     if (typeof localStorage['lang'] === 'undefined') {
//         window.localStorage.setItem('lang', 'vi-VN');
//     }
//     return window.localStorage.getItem('lang');
// }

// Bước 4
// $(document).ready(function() {
//     var lang = getLang();
//     console.log(lang)
//     $(".multilang").each(function(i,ojb) {
//         $("#" + ojb.id).html(labels[ojb.id][lang]).attr("title",
//         labels[ojb.id][lang]);
//     });
// });

$(document).ready(function(){
    $('body').addClass('loaded');
    myFunction();
});

function setLang(code){
    window.localStorage.setItem("lang",code);
    location.reload();
}


function getLang(){
    if(typeof (localStorage.getItem("lang"))=== null){
        window.localStorage.setItem("lang","vi-VN");
    }
    console.log(window.localStorage);
   return window.localStorage.getItem("lang");

    
}
function myFunction(){
    var lang = getLang();

    $('.multilang').each(function(i, obj){
        $("#"+obj.id).html(labels[obj.id][lang]).attr("title",labels[obj.id][lang]);
        console.log(obj.id);
    })
    
}