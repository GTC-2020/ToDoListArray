const STATUS ={
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    TO_DO:"To Do",
}

const PRIORITY = {
    HIGH:'high', 
    MEDIUM:'medium', 
    LOW:'low'
};

const DEFAULT_STATUS = 'To Do';
const DEFAULT_PREORITY = 'low';

const list = [
    {name:'create a post', status:STATUS.IN_PROGRESS, priority:PRIORITY.HIGH},
    { name: 'test', status: STATUS.DONE, priority: PRIORITY.HIGH},
    { name: 'test2', status: STATUS.DONE, priority: PRIORITY.MEDIUM},
    { name: 'test3', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH},
    { name: 'test4', status: STATUS.DONE, priority: PRIORITY.LOW},
];
 

function changeStatus(task, status){
    if((list.findIndex(item => item.name === task)) > -1){
     list.find(item => item.name === task).status = status;
    } else{
        console.log('this task doesnt exist');
    }
}

function changePriority(task, priority){
    if((list.findIndex(item => item.name === task)) > -1){
     list.find(item => item.name === task).priority = priority;
    } else{
        console.log('this task doesnt exist');
    }
}

function addTask(task){
   list.push({name:task, status:DEFAULT_STATUS, priority:DEFAULT_PREORITY});

}

function deleteTask(task){
    list.splice(list.findIndex(item => item.name === task), 1);
}

function show(){
let outputString ='';
for(let key in STATUS){
    outputString += `\n${STATUS[key]}: \n${list.filter(item => item.status === STATUS[key]).map(item => item.name).join('\n') || '-'}`;
}
    console.log(outputString);

}

function showby(criterion){
    let outputString = '';
    searc = (criterion === 'priority') ? PRIORITY : STATUS;

    for(let key in searc){
        outputString += `\n${searc[key]}: \n${list.filter(item => item[criterion] === searc[key]).map(item => item.name).join('\n') || '-'}`;
    }
    console.log(outputString);
}

addTask('read a book');
deleteTask('test');
deleteTask('test2');
deleteTask('test3');
deleteTask('test4');
changeStatus('read a book', 'Done');
addTask('don\'t forget to sleep');
addTask('write a code');
changeStatus('write a code', 'Done');
changeStatus('read a book', 'To Do');
changeStatus('don\'t forget to sleep', 'Done');
changePriority('read a book', 'medium');

showby('status');