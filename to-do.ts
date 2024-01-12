

import inquirer from "inquirer";

let todoString: string[] = [];
let loop = true;

interface TodoInput{
    todoitem: any;
    addMore: boolean
}
 while(loop){
    const TodoInput : TodoInput =await inquirer.prompt([
{
    type : "input",
    name : "todoItem",
    message :"Enter item Name which you want to add in your To-Do list"
},
{
    type :"confrim",
    name : "addMore",
    message : "Do you want to add more item in your To-Do list?",
    default: false
}
    ]);
    const todoItem = TodoInput.todoitem;
   const addMore = TodoInput.addMore;
if (todoItem){
    todoString.push(todoItem);
}
loop = addMore
 };
 if (todoString.length > 0){
    console.log (`Here is your To-Do list`);
    {
        
    }
 }else{
    console.log(`Your To-Do list is Empty!`);
 }