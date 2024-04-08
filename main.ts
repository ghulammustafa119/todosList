#! /usr/bin/env node

import inquirer from "inquirer";
let todos: string[] = [];
let condition: boolean = true;

let main = async () => {
  while (condition === true) {
    let option = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: "Select an option you want to do",
        choices: ["addTodo", "viewTodo", "updateTodo", "deleteTodo", "exit"],
      },
    ]);
    if (option.choice === "addTodo") {
      await addTodo();
    } else if (option.choice === "viewTodo") {
      await viewTodo();
    } else if (option.choice === "deleteTodo") {
      await deleteTodo();
    } else if (option.choice === "updateTodo") {
      await updateTodo();
    } else if (option.choice === "exit") {
      condition = false;
      console.log("Thank you for using my todo list app");
    }
  }
};

//  function to add new task to the list.
let addTodo = async () => {
  let add = await inquirer.prompt([
    {
      name: "newTodo",
      type: "input",
      message: "Enter your new task",
    },
  ]);
  todos.push(add.newTodo);
  console.log(`\n ${add.newTodo} task added successfully in todo list`);
};
// function to view all todoList tasks .
let viewTodo = async () => {
  console.log("\n your todo list :\n");
  todos.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`);
  });
};
// function to delete a task from the list.
let deleteTodo = async () => {
  let deleteTask = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the task number you want to delete",
    },
  ]);
  let deletedTask = todos.splice(deleteTask.index - 1, 1);
  console.log(
    `\n ${deletedTask} this task has been deleted successfully from your todo list`
  );
};
// function to update a task.
let updateTodo = async () => {
  let updateTask = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "enter the 'index number' of the task you want to update",
    },
    {
      name: "newTask",
      type: "input",
      message: "enter the new task",
    },
  ]);
  todos[updateTask.index - 1] = updateTask.newTask;
  console.log(
    `\n Task at the index no.${updateTask.index}: ${updateTask.newTask} updated successfully [for update list check option: "view todoList"] `
  );
};
main();
