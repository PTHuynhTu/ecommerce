package com.fsoft.ecommerce.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;

@Data
@JsonPropertyOrder({
        "errorCode",
        "message",
        "timestamp"
})
public class ApiErrorResponse{

    @JsonProperty("errorCode")
    private String errorCode;
    @JsonProperty("message")
    private String message;
    @JsonProperty
    private String timestamp;
    public ApiErrorResponse(String errorCode, String message, String timestamp) {
        this.errorCode = errorCode;
        this.message = message;
        this.timestamp = timestamp;
    }
}
