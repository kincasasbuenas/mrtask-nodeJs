
const description = {
	demand:true,
	alias:'d',
	desc:'Create a task'
}
const status= {
	default:true,
	alias:'s',
	desc:'Show status of task'
}


const argv = require('yargs')
.command('create','Crea una tarea.',description)
.command('list','Lista de tareas actuales.')
.command('update','Actualizacion de tarea.',{
	description,
	status
})
.command('suprimir','Borrar una tarea.',{
	description
})
.help()
.argv;

module.exports={
	argv
}