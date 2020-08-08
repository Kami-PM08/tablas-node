// const fs = require('fs');

const argv = require('./Config/yargs').argv;

// const argv = require('yargs')
//     .command('listar', 'Impreme en consola la tabla de multiplicar.', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea un archivo de la tabla de multiplicar.', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
const { help, alias } = require('yargs');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then()
            .catch(err => console.log(err))
            // console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}.`))
            .catch(err => console.log(err))
            // console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido');
}

// let base = 'uWu';

// let argv2 = process.argv;

// console.log(argv.base);
// console.log(argv2);

// let parametro = argv[2];

// let base = parametro.split('=')[1];