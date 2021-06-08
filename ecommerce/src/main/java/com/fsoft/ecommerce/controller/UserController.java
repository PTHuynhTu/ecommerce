package com.fsoft.ecommerce.controller;

import com.fsoft.ecommerce.dto.request.UserRegisterRequestDto;
import com.fsoft.ecommerce.dto.response.UserRegisterResponseDto;
import com.fsoft.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

//    @PostMapping("/register")
//    public ResponseEntity<UserRegisterResponseDto> registerUser(@Valid @RequestBody UserRegisterRequestDto userRegisterRequestDto) {
//        return ResponseEntity.ok(userService.registerUser(userRegisterRequestDto));
//    }
}
