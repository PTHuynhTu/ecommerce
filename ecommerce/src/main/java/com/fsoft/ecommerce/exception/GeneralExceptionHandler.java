package com.fsoft.ecommerce.exception;

import com.fsoft.ecommerce.dto.response.ApiErrorResponse;
import io.swagger.annotations.ApiResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class GeneralExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value
            = {UserRegisterException.class})
    protected ResponseEntity<ApiErrorResponse> handleConflict(UserRegisterException ex, WebRequest request) {
        ApiErrorResponse errRes = new ApiErrorResponse(ex.getErrorCode(), ex.getMessage(), LocalDateTime.now().toString());
        return new ResponseEntity<ApiErrorResponse>(errRes, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value
            = {InvalidInputException.class})
    protected ResponseEntity<ApiErrorResponse> handleInvalidInputException(InvalidInputException exception) {
        ApiErrorResponse errRes = new ApiErrorResponse(exception.getErrorCode(), exception.getMessage(),
                LocalDateTime.now().toString());
        return new ResponseEntity<ApiErrorResponse>(errRes, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value
            = {ResourceNotFoundException.class})
    protected ResponseEntity<ApiErrorResponse> handleResourceNotFoundException(ResourceNotFoundException exception) {
        ApiErrorResponse errRes = new ApiErrorResponse(exception.getErrorCode(), exception.getMessage(),
                LocalDateTime.now().toString());
        return new ResponseEntity<ApiErrorResponse>(errRes, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value
            = {AuthenticationException.class})
    protected ResponseEntity<ApiErrorResponse> handleAuthenticationException(AuthenticationException exception) {
        ApiErrorResponse errRes = new ApiErrorResponse(exception.getErrorCode(), exception.getMessage(),
                LocalDateTime.now().toString());
        return new ResponseEntity<ApiErrorResponse>(errRes, HttpStatus.NOT_ACCEPTABLE);
    }
}

