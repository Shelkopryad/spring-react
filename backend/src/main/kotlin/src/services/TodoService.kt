package src.services

import mu.KotlinLogging
import src.entities.Todo
import java.util.ArrayList
import java.util.concurrent.atomic.AtomicLong

class TodoService {
    private val log = KotlinLogging.logger {  }
    private val todos = ArrayList<Todo>()
    private val counter = AtomicLong()

    fun getTodo(id: Long): Todo? {
        for (todo in todos) {
            if (todo.id == id) {
                log.info(">>> TodoService::getTodo -> {}", todo.toString())
                return todo
            }
        }
        log.info(">>> TodoService::getTodo -> null")
        return null
    }

    fun getTodos(): List<Todo> {
        log.info(">>> TodoService::getTodos")
        return todos
    }

    fun createTodo(todo: Todo) {
        todo.id = counter.incrementAndGet()
        todo.isCompleted = false
        log.info(">>> TodoService::createTodo -> {}", todo.toString())
        todos.add(todo)
    }

    fun clearTodos() {
        log.info(">>> TodoService::clearTodos")
        todos.clear()
    }

}
