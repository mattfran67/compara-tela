resolucao(27, 4, 3, 0);
	resolucao(27, 4, 3, 1);

	function aspect(i) {
		var aspect = document.getElementsByTagName('select');
		var input = document.getElementsByTagName('input');
		var tamanho = aspect[i].value.split(":");

		resolucao(input[i].value, tamanho[0], tamanho[1], i);
	}

	function resolucao(pol, w, h, pos) {
		var monitor = document.getElementsByClassName('monitor');
		var soma_quad = w * w + h * h;
		var tam = 15, alt, larg;

		larg = (pol * Math.sqrt(1 / soma_quad) * w) * tam;
		alt = (pol * Math.sqrt(1 / soma_quad) * h) * tam;

		monitor[pos].style.width = larg + "px";
		monitor[pos].style.height = alt + "px";
		monitor[pos].style.lineHeight = alt + "px";
		monitor[pos].innerHTML = "Aspect Ratio " + w + ":" + h;
	}