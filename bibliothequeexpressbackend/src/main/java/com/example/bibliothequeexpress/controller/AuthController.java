package com.example.bibliothequeexpress.controller;

import com.example.bibliothequeexpress.Dto.LoginDto;
import com.example.bibliothequeexpress.Dto.SignupDto;
import com.example.bibliothequeexpress.entity.ERole;
import com.example.bibliothequeexpress.entity.Role;
import com.example.bibliothequeexpress.entity.User;
import com.example.bibliothequeexpress.repository.RoleRepository;
import com.example.bibliothequeexpress.repository.UserRepository;
import com.example.bibliothequeexpress.response.JwtResponse;
import com.example.bibliothequeexpress.response.MessageResponse;
import com.example.bibliothequeexpress.security.jwt.JwtUtils;
import com.example.bibliothequeexpress.security.services.UserDetailsImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
@Tag(name = "Authentication")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;
    @Operation(description = "signin")
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginDto loginDto) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles,
                userDetails.getFirstname(),
                userDetails.getLastename(),
                userDetails.getCin(),
                userDetails.getPhone()));
    }

    @Operation(description = "signup")
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupDto signupDto) {
        if (userRepository.existsByUsername(signupDto.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signupDto.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signupDto.getUsername(),
                signupDto.getEmail(),
                encoder.encode(signupDto.getPassword()));
        user.setFirstName(signupDto.getFirstname());
        user.setLasteName(signupDto.getLastename());
        user.setCin(signupDto.getCin());
        user.setPhone(signupDto.getPhone());


        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName(ERole.ROLE_MEMBRE)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        roles.add(userRole);



        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}
