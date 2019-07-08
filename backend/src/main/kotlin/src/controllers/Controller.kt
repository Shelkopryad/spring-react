package src.controllers

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import src.entities.Customer
import src.entities.Todo
import src.services.CustomerService
import src.services.TodoService

@CrossOrigin
@RestController
class Controller {

    private val customerService = CustomerService()
    private val todoService = TodoService()

    @GetMapping(path = arrayOf("/getCustomers"), produces = arrayOf("application/json"))
    fun getCustomers(): Map<Long, Customer> = customerService.getCustomers()

    @GetMapping(path = arrayOf("/getCustomer"), produces = arrayOf("application/json"))
    fun getCustomer(@RequestParam(value = "id") id: Long): ResponseEntity<Customer?> =
        ResponseEntity(customerService.getCustomer(id), HttpStatus.OK)

    @PostMapping(path = arrayOf("/addCustomer"), produces = arrayOf("application/json"))
    fun addCustomer(@RequestBody body: Customer): ResponseEntity<Customer> {
        customerService.setCustomer(body)
        return ResponseEntity(body, HttpStatus.OK)
    }

    @GetMapping(path = arrayOf("/getTodos"), produces = arrayOf("application/json"))
    fun getTodos(): ResponseEntity<List<Todo>> =
        ResponseEntity(todoService.getTodos(), HttpStatus.OK)

    @GetMapping(path = arrayOf("/getTodo"), produces = arrayOf("application/json"))
    fun getTodo(@RequestParam(value = "id") id: Long): ResponseEntity<Todo?> =
        ResponseEntity(todoService.getTodo(id), HttpStatus.OK)

    @PostMapping(path = arrayOf("/createTodo"), produces = arrayOf("application/json"))
    fun createTodo(@RequestBody todo: Todo): ResponseEntity<List<Todo>> {
        todoService.createTodo(todo)
        return ResponseEntity(todoService.getTodos(), HttpStatus.OK)
    }

    @PostMapping(path = arrayOf("/clearTodos"), produces = arrayOf("application/json"))
    fun createTodo(): ResponseEntity<String> {
        todoService.clearTodos()
        return ResponseEntity("All todos cleared", HttpStatus.OK)
    }

}
