package com.tunism.tunism.service;

import com.tunism.tunism.entity.Destination;
import com.tunism.tunism.repository.DestinationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DestinationService {

    @Autowired
    private DestinationRepo destinationRepository;

    public List<Destination> getAllDestinations() {
        return destinationRepository.findAll();
    }

    public Optional<Destination> getDestinationById(Long id) {
        return destinationRepository.findById(id);
    }

    public Destination createDestination(Destination destination) {
        return destinationRepository.save(destination);
    }

    /*public Destination updateDestination(Long id, Destination destinationDetails) {
        Destination destination = destinationRepository.findById(id).orElseThrow(() -> new RuntimeException("Destination not found"));
        destination.setName(destinationDetails.getName());
        destination.setPhotoUrl(destinationDetails.getPhotoUrl());
        return destinationRepository.save(destination);
    }



   public boolean deleteDestination(Long id) {
       if (destinationRepository.existsById(id)) {
           destinationRepository.deleteById(id);
           return true;
       }
       return false;
   }*/

    public Destination updateDestination(Long id, Destination destinationDetails) {
        Destination destination = destinationRepository.findById(id).orElseThrow(() -> new RuntimeException("Destination not found"));
        destination.setName(destinationDetails.getName());
        destination.setPhotoUrl(destinationDetails.getPhotoUrl());
        return destinationRepository.save(destination);
    }

    public boolean deleteDestination(Long id) {
        if (destinationRepository.existsById(id)) {
            // Use the injected accommodationService instance
            AccommodationService.deleteByDestinationId(id);

            // Then delete the destination
            destinationRepository.deleteById(id);
            return true;
        }
        return false;
    }

}