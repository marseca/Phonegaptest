window.addEventListener('load', init(), false);

function init()
{
    //new FastClick(document.body);
}

// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="header"><h1>Page Slider</h1></div>' +
        '<div class="scroller">' +
            '<ul class="list">' +
                '<li><a href="#page1"><strong>Build Bot</strong></a></li>' +
                '<li><a href="#page2"><strong>Medi Bot</strong></a></li>' +
                '<li><a href="#page3"><strong>Ripple Bot</strong></a></li>' +
            '</ul>' +
        '</div>' +
    '</div>';

var detailsPage =
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '<img src="images/{{img}}"/>' +
                '<h2>{{name}}</h2>' +
                '<p>{{description}}</p>' +
            '</div>' +
        '</div>' +
    '</div>';
function hola()
{
    console.log("hola");
    /*x$().xhr('http://www.url.co.uk/Mobile/test.php', 
                    function(){
                        //x$('#container').html(this.responseText);
                        x$('#container').html("<a>hola</a>");
                    }
                );*/
    page = homePage;
    x$('#container').tween({ left:'100px', backgroundColor:'blue' });
    //x$('#container').html(page);
    
}