const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base = 5, maximo = 10, listar) => {
	try {
		let salida = "";
		console.log("================================".rainbow);
		console.log(`         Tabla del`, base);
		console.log("================================".rainbow);

		for (let i = 1; i <= maximo; i++) {
			salida += `${base} x ${i} = ${i * base} \n`;
		}
		if (listar) {
			console.log(salida);
		}
		fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
		return `tabla-${base}.txt creada`.green;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	crearArchivo,
};
