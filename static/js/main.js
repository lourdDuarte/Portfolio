const typed = new Typed('.typed', {
	strings: [
		'<p class="p-type"> { Hi! i&apos;m Lourdes,</p><span class ="span-type"> Welcome to my portfolio } </span><br><a href="https://drive.google.com/file/d/1IifHBsD_3YIRP0oJn7vWS87b9CYR-bVV/view?usp=sharing" target="_blank"><button class="btn-type">VIEW CV</button></a><br>'	
	],

	typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
	startDelay: 0, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1100, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

