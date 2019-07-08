package src.services

import mu.KotlinLogging
import src.entities.Customer
import java.util.HashMap
import java.util.concurrent.atomic.AtomicLong

class CustomerService {

    private val log = KotlinLogging.logger {}
    private val customers = HashMap<Long, Customer>()
    private val counter = AtomicLong()

    fun getCustomer(id: Long): Customer? {
        if (customers[id] == null) {
            val defaultCustomer = Customer()
            defaultCustomer.name = "Default"
            defaultCustomer.surName = "Default"
            log.info(">>> CustomerService::getCustomer : id = {}, default {}", id, defaultCustomer.toString())
            return defaultCustomer
        }
        log.info(">>> CustomerService::getCustomer : id = {}, {}", id, customers[id].toString())
        return customers[id]
    }

    fun getCustomers(): Map<Long, Customer> {
        return customers
    }

    fun setCustomer(customer: Customer) {
        log.info(">>> CustomerService::setCustomer : {}", customer.toString())
        customers[counter.incrementAndGet()] = customer
    }
}
