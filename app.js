const argv=require('./config/yargs').argv;
const colors=require('colors');
const pendingTask= require('./pendingtask/pendingtask');
let command = argv._[0];

switch( command ){
	case 'create':
		let task = pendingTask.create(argv.description);
		console.log(task);
		console.log('task created!!');
		break;

	case 'list':
		let listTaskPending=pendingTask.getPending();
		for (let task of listTaskPending) {
			console.log("============= TASK PENDING ===========".green);
			console.log("Task:",task.description);
			console.log("State:",task.complete);
			console.log("======================================".green);

		}
		console.log('list of tasks!!!');
		break;

	case 'update':
		let update = pendingTask.update(argv.d,argv.c);
		console.log(update);
		break;

	case 'suprimir':
		let supr = pendingTask.suprimir(argv.d);
		console.log(supr);
		break;

	default:
		console.log('command not found');
		break;
}
