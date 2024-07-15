package com.tunism.tunism.controller;

import com.tunism.tunism.entity.Accommodation;
import com.tunism.tunism.entity.Destination;
import com.tunism.tunism.service.AccommodationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accommodations")
public class AccommodationController {
    @Autowired

    private AccommodationService accommodationService;


    @GetMapping
    public List<Accommodation> getAllDestinations() {
        return accommodationService.getAllAccommodations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Accommodation> getAccomodationById(@PathVariable Long id) {
        return accommodationService.getAccommodationById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Accommodation createAccomodation(@RequestBody Accommodation accommodation) {
        return accommodationService.createAccomodation(accommodation);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Accommodation> updateAccomodation(@PathVariable Long id, @RequestBody Accommodation accommodationDetails) {
        return ResponseEntity.ok(accommodationService.updateAccomodation(id, accommodationDetails));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccomodation(@PathVariable Long id) {
       accommodationService.deleteAccomodation(id);
        return ResponseEntity.noContent().build();
    }
}