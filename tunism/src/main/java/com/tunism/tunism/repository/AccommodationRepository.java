package com.tunism.tunism.repository;


import com.tunism.tunism.entity.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {
    static void deleteByDestinationId(Long destinationId){};
    List<Accommodation> findByDestinationId(Long destinationId);


    // Add custom query methods if needed
}

