package com.tunism.tunism.repository;

import com.tunism.tunism.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User,Long> {
    User findFirstByEmail(String email);


}
