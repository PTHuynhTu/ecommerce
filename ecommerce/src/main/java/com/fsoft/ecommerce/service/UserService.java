package com.fsoft.ecommerce.service;

import com.fsoft.ecommerce.dto.request.LoginRequestDto;
import com.fsoft.ecommerce.dto.request.UserRegisterRequestDto;
import com.fsoft.ecommerce.dto.response.LoginResponseDto;
import com.fsoft.ecommerce.dto.response.UserRegisterResponseDto;

public interface UserService {
    LoginResponseDto login(LoginRequestDto loginDtoRequest);
    UserRegisterResponseDto registerUser(UserRegisterRequestDto userRegisterRequestDto);
    UserRegisterResponseDto activeAccount(String activeCode);
}
