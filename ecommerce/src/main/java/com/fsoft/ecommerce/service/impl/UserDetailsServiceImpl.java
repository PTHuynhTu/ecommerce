package com.fsoft.ecommerce.service.impl;

import com.fsoft.ecommerce.configuration.UserPrincipal;
import com.fsoft.ecommerce.entity.UserEntity;
import com.fsoft.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    public static final String USER_NOT_FOUND = "Cannot find user: ";

    @Autowired
    private UserRepository userRepository;

    /**
     * @param username
     * @return
     * @throws UsernameNotFoundException
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByUserName(username).orElseThrow(() -> new UsernameNotFoundException(USER_NOT_FOUND + username));
        return UserPrincipal.buildUser(user);
    }
}
