package com.tunism.tunism.repository;


import com.tunism.tunism.entity.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {
    static void deleteByDestinationId(Long destinationId){}

    // Add custom query methods if needed
}

