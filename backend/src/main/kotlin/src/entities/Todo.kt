package src.entities

import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonPropertyOrder
import lombok.Data

@Data
@JsonPropertyOrder("id", "title", "description", "date", "completed")
class Todo {

    @JsonProperty("id")
    var id: Long = 0

    @JsonProperty("title")
    var title: String? = null

    @JsonProperty("description")
    var description: String? = null

    @JsonProperty("date")
    var date: String? = null

    @JsonProperty("completed")
    var isCompleted: Boolean = false

    override fun toString(): String {
        return "Todo(id=$id, title=$title, description=$description, date=$date, isCompleted=$isCompleted)"
    }
}
