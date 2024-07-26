package com.tunism.tunism.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.tunism.tunism.entity.Destination;
import com.tunism.tunism.service.DestinationService;
import com.tunism.tunism.service.FileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/destinations")
@CrossOrigin(origins = "http://localhost:4200")
public class DestinationController {

    @Autowired
    private DestinationService destinationService;

    @Autowired
    private FileUploadService fileUploadService;

    @GetMapping
    public List<Destination> getAllDestinations() {
        List<Destination> destinations = destinationService.getAllDestinations();
        for (Destination destination : destinations) {
            if (destination.getPhotoUrl() != null && !destination.getPhotoUrl().startsWith("http")) {
                destination.setPhotoUrl("/images/" + destination.getPhotoUrl());
            }
        }
        return destinations;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Destination> getDestinationById(@PathVariable Long id) {
        return destinationService.getDestinationById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Destination> createDestination(
            @RequestPart("destination") String destinationJson,
            @RequestPart("file") MultipartFile file) throws Exception {

        System.out.println("Received destination JSON: " + destinationJson);
        System.out.println("Received file: " + file.getOriginalFilename());

        ObjectMapper objectMapper = new ObjectMapper();
        Destination destination = objectMapper.readValue(destinationJson, Destination.class);

        // Handle file upload
        String filename = fileUploadService.store(file);
        destination.setPhotoUrl("http://localhost:8081/images/" + filename);

        Destination createdDestination = destinationService.createDestination(destination);
        return ResponseEntity.ok(createdDestination);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Destination> updateDestination(
            @PathVariable Long id,
            @RequestPart(value = "destination", required = false) String destinationJson,
            @RequestPart(value = "file", required = false) MultipartFile file) throws Exception {

        System.out.println("Received destination JSON: " + destinationJson);
        System.out.println("Received file: " + file != null ? file.getOriginalFilename() : "No file");

        Destination existingDestination = destinationService.getDestinationById(id)
                .orElseThrow(() -> new RuntimeException("Destination not found"));

        if (destinationJson != null) {
            ObjectMapper objectMapper = new ObjectMapper();
            Destination destinationDetails = objectMapper.readValue(destinationJson, Destination.class);
            existingDestination.setName(destinationDetails.getName());
        }

        if (file != null) {
            String filename = fileUploadService.store(file);
            existingDestination.setPhotoUrl("http://localhost:8081/images/" + filename);
        }

        Destination updatedDestination = destinationService.updateDestination(id, existingDestination);
        return ResponseEntity.ok(updatedDestination);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDestination(@PathVariable Long id) {
        if (destinationService.deleteDestination(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
