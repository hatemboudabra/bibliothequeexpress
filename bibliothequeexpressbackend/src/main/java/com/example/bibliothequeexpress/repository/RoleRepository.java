package com.example.bibliothequeexpress.repository;

import com.example.bibliothequeexpress.entity.ERole;
import com.example.bibliothequeexpress.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
    Optional<Role> findByName(ERole name);
     boolean existsByName(ERole r1);
}
