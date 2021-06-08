package com.fsoft.ecommerce.exception;

import io.swagger.annotations.ApiResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
//@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    private String message;
    private String errorCode;
}
