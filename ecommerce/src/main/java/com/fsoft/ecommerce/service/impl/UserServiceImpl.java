package com.fsoft.ecommerce.service.impl;

import com.fsoft.ecommerce.dto.request.LoginRequestDto;
import com.fsoft.ecommerce.dto.request.UserRegisterRequestDto;
import com.fsoft.ecommerce.dto.response.LoginResponseDto;
import com.fsoft.ecommerce.dto.response.UserRegisterResponseDto;
import com.fsoft.ecommerce.entity.UserEntity;
import com.fsoft.ecommerce.enums.ErrorCode;
import com.fsoft.ecommerce.enums.RoleName;
import com.fsoft.ecommerce.exception.UserRegisterException;
import com.fsoft.ecommerce.repository.UserRepository;
import com.fsoft.ecommerce.security.JwtProvider;
import com.fsoft.ecommerce.service.UserService;
import com.fsoft.ecommerce.util.UUIDBuild;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private AuthenticationManager authenticationManager;

    private JwtProvider jwtProvider;

    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    private ModelMapper modelMapper;

    @Autowired
    public UserServiceImpl(AuthenticationManager authenticationManager, JwtProvider jwtProvider, UserRepository userRepository,
                           PasswordEncoder passwordEncoder, ModelMapper modelMapper) {
        this.authenticationManager = authenticationManager;
        this.jwtProvider = jwtProvider;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.modelMapper = modelMapper;
    }

    @Override
    public LoginResponseDto login(LoginRequestDto loginDtoRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDtoRequest.getUsername(), loginDtoRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateJWT(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return new LoginResponseDto(jwt, userDetails.getUsername(), userDetails.getAuthorities());
    }
    @Override
    public UserRegisterResponseDto registerUser(UserRegisterRequestDto userRegisterRequestDto) {
        if (existsByUserName(userRegisterRequestDto.getUsername())) {
            throw new UserRegisterException(ErrorCode.E1001.getMessage(), ErrorCode.E1001.getErrorCode());
        }

        if (existsByEmail(userRegisterRequestDto.getEmail())) {
            throw new UserRegisterException(ErrorCode.E1002.getMessage(), ErrorCode.E1002.getErrorCode());
        }

        if (!userRegisterRequestDto.getPassword().equals(userRegisterRequestDto.getPassword2())) {
            throw new UserRegisterException(ErrorCode.E1004.getMessage(), ErrorCode.E1004.getErrorCode());
        }

        UserEntity userEntity = new UserEntity();
        userEntity.setId(UUIDBuild.createUUID());
        userEntity.setUserName(userRegisterRequestDto.getUsername().toLowerCase());
        userEntity.setPassword(passwordEncoder.encode(userRegisterRequestDto.getPassword()));
        userEntity.setEmail(userRegisterRequestDto.getEmail().toLowerCase());
        userEntity.setFirstName(userRegisterRequestDto.getFirstName());
        userEntity.setLastName(userRegisterRequestDto.getLastName());
        userEntity.setPhoneNumber(userRegisterRequestDto.getPhoneNumber());
        userEntity.setRole(RoleName.ROLE_USER.toString());
        userRepository.save(userEntity);

        return modelMapper.map(userRegisterRequestDto, UserRegisterResponseDto.class);

    }

    public Boolean existsByUserName(String username) {
        return userRepository.existsByUserName(username);
    }

    public Boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

}
