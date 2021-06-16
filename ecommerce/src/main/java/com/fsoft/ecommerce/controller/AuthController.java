package com.fsoft.ecommerce.controller;

import com.fsoft.ecommerce.dto.request.LoginRequestDto;
import com.fsoft.ecommerce.dto.request.UserRegisterRequestDto;
import com.fsoft.ecommerce.dto.response.LoginResponseDto;
import com.fsoft.ecommerce.dto.response.UserRegisterResponseDto;
import com.fsoft.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    /**
     *
     * @param userRegisterRequestDto
     * @return
     */
    @PostMapping("/signup")
    public ResponseEntity<UserRegisterResponseDto> registerUser(@Valid @RequestBody UserRegisterRequestDto userRegisterRequestDto) {
        return ResponseEntity.ok(userService.registerUser(userRegisterRequestDto));
    }

    /**
     * @param loginDtoRequest
     * @return include bearer token, username and roles of username.
     * If incorrect username and password, return Unauthorized with status code 401.
     * If username or password is blank, return Bad request with status code 400
     */
    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@Valid @RequestBody LoginRequestDto loginDtoRequest) {
        return ResponseEntity.ok(userService.login(loginDtoRequest));
    }

    @GetMapping("/active-account")
    public ResponseEntity<UserRegisterResponseDto> activeAccount(@RequestParam String code) {
        return ResponseEntity.ok(userService.activeAccount(code));
    }


}
