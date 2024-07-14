package com.tunism.tunism.services.authentication;

import com.tunism.tunism.dto.SignupRequestDTO;
import com.tunism.tunism.dto.UserDto;

public interface AuthService {
    UserDto signupTourist(SignupRequestDTO signupRequestDTO);
    Boolean presentByEmail(String email);

}
