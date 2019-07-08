package src.entities

import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonPropertyOrder
import org.springframework.stereotype.Component

@Component
@JsonPropertyOrder("name", "surName")
class Customer {

    @JsonProperty("name")
    var name: String? = null

    @JsonProperty("surName")
    var surName: String? = null

    override fun toString(): String {
        return "Customer{" +
                "name='" + name + '\''.toString() +
                ", surName='" + surName + '\''.toString() +
                '}'.toString()
    }
}
