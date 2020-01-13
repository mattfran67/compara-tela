var aspectRatio = document.querySelectorAll('select');
var input = document.querySelectorAll('input');
var monitor = document.querySelectorAll('.monitor');
var inform = document.querySelectorAll(".info");

resolucao(27, 4, 3, 0);
resolucao(27, 4, 3, 1);

function aspect(i) {
	var tamanho = aspectRatio[i].value.split(":");

	resolucao(input[i].value, tamanho[0], tamanho[1], i);
}

function resolucao(pol, w, h, pos) {
	var soma_quad = w * w + h * h;
	var tam = 15, alt, larg;

	larg = (pol * Math.sqrt(1 / soma_quad) * w) * tam;
	alt = (pol * Math.sqrt(1 / soma_quad) * h) * tam;

	monitor[pos].style.width = larg + "px";
	monitor[pos].style.height = alt + "px";
	monitor[pos].style.lineHeight = alt + "px";
	monitor[pos].innerHTML = "Aspect Ratio " + w + ":" + h;

	info(larg / tam, alt / tam, pol, pos)
}

function info(larg, height, diag, pos) {
	var largCent = (larg * 2.54).toFixed(2);
	var heightCent = (height * 2.54).toFixed(2);
	var diagCent = (diag * 2.54).toFixed(2);
	inform[pos].innerHTML = 
	"Largura: " + largCent + " cm<br>" +
	"Altura: " + heightCent + " cm<br>" +
	"Diagonal: " + diagCent + " cm<br>";
}