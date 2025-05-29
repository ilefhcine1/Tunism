package com.tunism.tunism.controller;

import com.tunism.tunism.entity.Event;
import com.tunism.tunism.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "http://localhost:4200")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

  /*  @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        return eventService.getEventById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
*/
    @PostMapping
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        Event createdEvent = eventService.createEvent(event);
        return ResponseEntity.ok(createdEvent);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        Event existingEvent = eventService.getEventById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        existingEvent.setName(eventDetails.getName());
        existingEvent.setDetails(eventDetails.getDetails());
        existingEvent.setLocation(eventDetails.getLocation());
        existingEvent.setDate(eventDetails.getDate());

        Event updatedEvent = eventService.updateEvent(id, existingEvent);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        if (eventService.deleteEvent(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Optional<Event> event = eventService.getEventById(id);
        if (event.isPresent()) {
            return ResponseEntity.ok(event.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }


    @GetMapping("/search")
    public List<Event> searchEvents(@RequestParam String query) {
        return eventService.searchEvents(query);
    }


    /*@PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventService.saveEvent(event);
    }*/

    // Additional methods for updating and deleting events
}

