package com.fsoft.ecommerce.repository;


import com.fsoft.ecommerce.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUserName(String username);

    Boolean existsByEmail(String email);

    Boolean existsByUserName(String username);
}
