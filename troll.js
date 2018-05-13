if (typeof $ === 'undefined') {

	alert('RTFM');
	alert('qui s\'appele README.md');

}

function togglePanda(opened){
	var sad = document.querySelector('.sad-panda');
	var body = document.querySelector('body');
	if(!opened) {
		var holder = document.createElement('div');
		holder.classList.add('sad-panda');
		var panda = document.createElement('img');
		panda.setAttribute('src', 'panda.png');
		holder.appendChild(panda);
		body.appendChild(holder);
	} else if (sad){
		body.removeChild(sad);
	}
}

setTimeout(function(){
	togglePanda(window.devtools.open);
},2000);

window.addEventListener('devtoolschange', function (e) {
	togglePanda(e.detail.open)
});