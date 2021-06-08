package com.fsoft.ecommerce.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserRegisterException extends RuntimeException {

    private String message;
    private String errorCode;

}
