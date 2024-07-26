package com.tunism.tunism.service;

import com.tunism.tunism.entity.Accommodation;

import com.tunism.tunism.repository.AccommodationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccommodationService {
@Autowired
    private AccommodationRepository accommodationRepository;
    public List<Accommodation> getAllAccommodations() {
        return accommodationRepository.findAll();
    }

    public Optional<Accommodation> getAccommodationById(Long id) {
        return accommodationRepository.findById(id);
    }

    public Accommodation createAccomodation(Accommodation accommodation) {
        return accommodationRepository.save(accommodation);
    }

    public Accommodation updateAccomodation(Long id, Accommodation accommodationDetails) {
        Accommodation accommodation = accommodationRepository.findById(id).orElseThrow(() -> new RuntimeException("accomodation not found"));
        accommodation.setName(accommodationDetails.getName());
       accommodation.setDescription(accommodationDetails.getDescription());
        accommodation.setType(accommodationDetails.getType());
        accommodation.setDestination(accommodationDetails.getDestination());


        return accommodationRepository.save(accommodation);
    }

    public void deleteAccomodation(Long id) {
        accommodationRepository.deleteById(id);
    }

    public static void deleteByDestinationId(Long destinationId) {
        AccommodationRepository.deleteByDestinationId(destinationId);
    }
}