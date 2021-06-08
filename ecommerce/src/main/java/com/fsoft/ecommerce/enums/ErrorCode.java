package com.fsoft.ecommerce.enums;

public enum ErrorCode {

    E1001("1001", "Username is already taken"),
    E1002("1002", "Email is already taken"),
    E1003("1003", "Input wrong format Email"),

    E1101("1101", "Username or password incorrect"),
    E1102("1102", "Invalid token"),
    E1103("1103", "You don't have permission to do that"),
    E1104("1104", "Invalid input"),
    E1105("1105", "Resource not found"),
    E1106("1106", "You have not permission to access"),
    E500("500", "Something went wrong. Please try again");


    private String errorCode;
    private String message;


    ErrorCode(String errorCode, String message) {
        this.errorCode = errorCode;
        this.message = message;


    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
