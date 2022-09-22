import { addNewTaskSetup } from './addNewTask';
import './style.css';
import { todoListData } from './todoListData';

const htmlForm = document.getElementById('todo-form');
const htmlTitle = document.getElementById('title-input');
const htmlDescription = document.getElementById('description-input');

todoListData.data = JSON.parse(localStorage.getItem('todo-list-local-storage')) || [];
addNewTaskSetup(htmlForm, htmlTitle, htmlDescription);
todoListData.render()