package com.tunism.tunism.dto;

import com.tunism.tunism.enums.UserRole;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class SignupRequestDTO {

    private Long id;
    private String email;
    private String password;
    private String name;
    private String lastname;
    private  String phone;


}
