import express, { Express, Request, Response, NextFunction } from 'express'
export const todoRoute = express.Router()

let _todoList = [
    { id: 1, description: "Make todo list with checklist input.", status: true },
    { id: 2, description: "Read a book.", status: false },
    { id: 3, description: "Work out.", status: true },
    { id: 4, description: "Go shoping.", status: false },
]

todoRoute.get('/', (req, res) => {
    res.json(_todoList);
});

todoRoute.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const todoList = _todoList.find((e) => e.id === id)
    res.json(todoList);
});

todoRoute.post('/', (req, res) => {
    const id = Date.now()
    console.log(req.body)
    const todoList = { id, ...req.body }
    _todoList.push(todoList)
    res.status(201).json(todoList);
});

todoRoute.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const todoList = _todoList.find((e) => e.id === id)
    if (todoList) {
        _todoList = _todoList.filter(e => e.id !== id)
        res.sendStatus(204);
    } else {
        res.sendStatus(404)
    }
});

todoRoute.patch('/:id', (req, res) => {
    const id = Number(req.params.id)
    const todoList = _todoList.find((e) => e.id === id)
    console.log(todoList)
    if (todoList) {
        _todoList = _todoList.filter(e => e.id !== id)
        const updatedTodo = { ...todoList, ...req.body }
        _todoList.push(updatedTodo)
        _todoList = _todoList.sort((td1, td2) => (td1.id > td2.id) ? 1 : (td1.id < td2.id) ? -1 : 0);
        res.status(200).json(updatedTodo);
    } else {
        res.sendStatus(404)
    }
});