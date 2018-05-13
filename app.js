var jokes = [
	"\"On ne laisse pas cookie dans un coin\"\n - Dirty Cookie",
	"\"Que le cookie soit avec toi\"\n - Star Cookie",
	"\"Dans la vie il y a deux types de cookies...\n Ceux qui ont des pépite et ceux qui craquent. Toi tu craques! \"\n- Le bon, le chocolaté, le croustillant",
	"\"Avec les pépites d'un cookie entre les dents, on ne prononce que les voyelles.\"\n - Fight Cokkie ",
	"\"Le cookie n'éxiste pas\"\n - Cooktrix ",
	"\"The cookie is a lie\"\n - Portal cookie ",
	"\"I want my cookie\"\n - Inglorius cookie ",
	"\"Je suis trop vieux pour ces cookies!\"\n - Le cookie fatal IV ",
	"\"Le cookie c'est moi.\"\n - Judge cookie ",
	"\"La différence entre toi et moi, c'est que moi j'ai le cookie.\"\n - Men in Cookie ",
	"\"\"\n -  ",
	"\"\"\n -  "
];

var clicks = 0;

$(document).ready(function(){

	$(".cake").click(function() {

		onInput();
	});

	$("body").bind("keydown", function(e) {
		// Barre espace
		if(e.keyCode == 32){

			onInput();
		}
	});
});

function onInput () {

	var counter = $(".counter");
	var randomInt = Math.round(Math.random() * (jokes.length - 1));				

	clicks += 1;
	counter.html(clicks);

	if (clicks % 20 == 0) {
		
		alert(
			jokes[randomInt]
		);
	}
}