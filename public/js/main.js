$(function() {
    console.log("We got in");
    $("a[href=#menuExpand]").click(function(e) {
        console.log("click is working");
        $(".menu").toggleClass("menuOpen");
        e.preventDefault();
    });
});