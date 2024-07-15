package com.tunism.tunism.controller;

import com.tunism.tunism.dto.SignupRequestDTO;
import com.tunism.tunism.dto.UserDto;
import com.tunism.tunism.services.authentication.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/tourist")
public class AuthenticationController {
    @Autowired
    private AuthService authService;
    @PostMapping("/tourist/sign-up")
    public ResponseEntity<?> signupTourist(@RequestBody SignupRequestDTO signupRequestDTO){
        if(authService.presentByEmail(signupRequestDTO.getEmail())){
            return new ResponseEntity<>("Client already exists with this email!", HttpStatus.NOT_ACCEPTABLE);

        }
        UserDto createdUser = authService.signupTourist(signupRequestDTO);
        return new ResponseEntity<>(createdUser,HttpStatus.OK);
    }



}
