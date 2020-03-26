const fs=require('fs')

let listPending = [];

const saveDB = () => {

    let data = JSON.stringify(listPending);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Do not can save', err);
    });

}

const loadDB = () => {

    try {

        listPending = require('../db/data.json');

    } catch (error) {
        listPending = [];
    }

}

const create = (description) => {

	loadDB();
	
    let pending = {
        description,
        complete: false
    };

    listPending.push(pending);
    saveDB()
;
    return pending;

}

const getPending = () => {
    loadDB();
    return listPending;
}

const update = (description, complete=true) => {
    loadDB();

    let index= listPending.findIndex(task=>{
        return task.description === description;
    });

    if(index >= 0){
        listPending[index].complete=complete;
        saveDB();
        return true;
    }else{
        return false;
    }

}

const suprimir = (description)=>{
    loadDB();

    let cleanList = listPending.filter(task =>{
        return task.description !== description;
    });

    if( listPending.length === cleanList.length){
        return false;
    }
    else{
        listPending = cleanList;
        saveDB();
        return true;
    }
}


module.exports = {
    create,
    getPending,
    update,
    suprimir
}