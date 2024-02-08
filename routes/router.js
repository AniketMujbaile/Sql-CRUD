import express from 'express';
import { createItem, getAllItems, updateItem, deleteItem } from '../controller/itemsController.js';

export const itemsRouter = express.Router();

itemsRouter.post('/', createItem);
itemsRouter.get('/', getAllItems);
itemsRouter.put('/:id', updateItem);
itemsRouter.delete('/:id', deleteItem);
