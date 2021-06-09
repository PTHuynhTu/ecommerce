package com.fsoft.ecommerce.dto.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class UserRegisterRequestDto {
    @NotBlank(message = "Username cannot be empty")
    private String username;
    @NotBlank
    private String phoneNumber;

//    @NotBlank(message = "Fill captcha.")
//    private String captcha;

    @NotBlank(message = "First name cannot be empty")
    private String firstName;

    @NotBlank(message = "Last name cannot be empty")
    private String lastName;

    @Size(message = "The password must be between 6 and 16 characters long")
    private String password;

    @Size( message = "The password confirmation must be between 6 and 16 characters long")
    private String password2;

    @Email(message = "Incorrect email")
    @NotBlank(message = "Email cannot be empty")
    private String email;
}
