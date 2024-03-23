import { Router } from 'express'
import bookController from './src/books/book.controller'
import bookSchema from './src/books/book.schema'

const routes = Router()
routes.get('/health-check')
routes.post('/books', bookController.create)              // cria livro
routes.get('/findAll', bookController.findAll)            // busca todos os livros
routes.get('/findById/:id', bookController.findById)      // busca livro por id
routes.put('/boook/id', bookSchema.findByIdAndUpdate)     // atualiza livro
routes.delete('/boook/id', bookSchema.findByIdAndDelete)  // deleta livro


export {
    routes
}