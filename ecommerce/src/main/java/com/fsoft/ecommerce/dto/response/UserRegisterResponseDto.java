package com.fsoft.ecommerce.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserRegisterResponseDto {
    private String email;
    private String firstName;
    private String lastName;
}
