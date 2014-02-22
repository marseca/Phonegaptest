window.addEventListener('load', init, false);

var slider = new PageSlider($("#container"));

$("#medibot").on("touchstart", function(ev) {
    changePage('detailPage.html','left');
})

function init()
{
    new FastClick(document.body);
    changePage('homePage.html','left');
}

$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    console.log("hol");
    var page,
        hash = window.location.hash;
    slider.slidePage($(page));
}

function changePage(url,dir)
{
    console.log("changepage");
    var page;
    $.get( url, function( data ) {    
        page = data;
        slider.slidePage($(page),dir);
    })    
}

//route();