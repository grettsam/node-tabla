const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require('colors');

console.clear();
crearArchivo(argv.b, argv.x, argv.l)
	.then((nombreArchivo) => console.log(nombreArchivo))
	.catch((err) => console.log(err));

