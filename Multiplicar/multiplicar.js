const fs = require('fs');

const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número.`);
            return;
        }
        if (!Number(limite)) { //suponer la posibilidad del ingreso de números negativos o 0
            reject(`${limite} no es un número.`);
            return;
        }

        let data = '';

        for (i = 1; i <= limite; i++) {
            console.log(`${base} X ${i} = ${base*i}`.green);
            // data += `${base} X ${i} = ${base*i}\n`;
        }

    })
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número.`);
            return;
        }
        if (!Number(limite)) { //suponer la posibilidad del ingreso de números negativos o 0
            reject(`${limite} no es un número.`);
            return;
        }

        let data = '';

        for (i = 1; i <= limite; i++) {
            // console.log(`${base} X ${i} = ${base*i}`);
            data += `${base} X ${i} = ${base*i}\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}-hasta-el-${limite}.txt`, data, (err) => {
            if (err) {
                reject('No se creó el archivo.');
            } else {
                resolve(`tabla-${base}-hasta-el-${limite}.txt`.blue);
            }
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}