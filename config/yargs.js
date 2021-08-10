const argv = require("yargs")
	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe: "Es la base de la tabla de multiplicar",
	})
	.option("l", {
		alias: "listar",
		type: "boolean",
		default: false,
		describe: "Muestra la tabla en consola",
	})
	.option("x", {
		alias: "maximo",
		type: "number",
		default: 10,
		describe: "Numero maximo por el cual se multiplicara la base",
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw "Tiene que ser un numero";
		} else {
			return true;
		}
	}).argv;

module.exports = argv;
