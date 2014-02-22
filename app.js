window.addEventListener('load', init, false);

var slider = new PageSlider($("#container"));

$(window).on('hashchange', route);

function init()
{
    new FastClick(document.body);
    loadPage("homePage.html");
}

// Llamado cuando cambia el hash
function route(event) {
    var page,
        hash = window.location.hash;
    var url = getURL(hash);
    loadPage(url);
}

// Carga la pagina y la muestra con un efecto slider
function loadPage(url)
{
    console.log("hola " + window.location.hash);
    $.get( url, function( data ) {    
        page = data;
        slider.slidePage($(page),'left');
    })
}

function getURL(hash)
{
    var url = hash.split('#');
    return url[1];
}

