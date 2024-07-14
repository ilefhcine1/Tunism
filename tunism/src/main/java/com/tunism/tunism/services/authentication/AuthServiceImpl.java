package com.tunism.tunism.services.authentication;

import com.tunism.tunism.dto.SignupRequestDTO;
import com.tunism.tunism.dto.UserDto;
import com.tunism.tunism.entity.User;
import com.tunism.tunism.enums.UserRole;
import com.tunism.tunism.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class AuthServiceImpl implements AuthService{


   @Autowired
    private UserRepository userRepository;
   public UserDto signupTourist(SignupRequestDTO signupRequestDTO){
       User user = new User();
       user.setName(signupRequestDTO.getName());
       user.setLastname(signupRequestDTO.getLastname());
       user.setEmail(signupRequestDTO.getEmail());
       user.setPhone(signupRequestDTO.getPhone());
       user.setPassword(signupRequestDTO.getPassword());
       user.setRole(UserRole.TOURIST);
       return  userRepository.save(user).getDto();
   }
   public Boolean presentByEmail(String email){
       return userRepository.findFirstByEmail(email) != null;
   }


}
