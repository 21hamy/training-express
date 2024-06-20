"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRoute = void 0;
const express_1 = __importDefault(require("express"));
exports.todoRoute = express_1.default.Router();
let _todoList = [
    { id: 1, description: "Make todo list with checklist input.", status: true },
    { id: 2, description: "Read a book.", status: false },
    { id: 3, description: "Work out.", status: true },
    { id: 4, description: "Go shoping.", status: false },
];
exports.todoRoute.get('/', (req, res) => {
    res.json(_todoList);
});
exports.todoRoute.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const todoList = _todoList.find((e) => e.id === id);
    res.json(todoList);
});
exports.todoRoute.post('/', (req, res) => {
    const id = Date.now();
    console.log(req.body);
    const todoList = Object.assign({ id }, req.body);
    _todoList.push(todoList);
    res.status(201).json(todoList);
});
exports.todoRoute.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const todoList = _todoList.find((e) => e.id === id);
    if (todoList) {
        _todoList = _todoList.filter(e => e.id !== id);
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});
exports.todoRoute.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const todoList = _todoList.find((e) => e.id === id);
    console.log(todoList);
    if (todoList) {
        _todoList = _todoList.filter(e => e.id !== id);
        const updatedTodo = Object.assign(Object.assign({}, todoList), req.body);
        _todoList.push(updatedTodo);
        _todoList = _todoList.sort((td1, td2) => (td1.id > td2.id) ? 1 : (td1.id < td2.id) ? -1 : 0);
        res.status(200).json(updatedTodo);
    }
    else {
        res.sendStatus(404);
    }
});
