window.addEventListener('load', init, false);

var slider = new PageSlider($("#container"));

document.getElementById('medibot').addEventListener('touchstart', function(e){
  changePage("detailPage.html",'left');
 }, false)


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