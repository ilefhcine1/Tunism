package com.tunism.tunism.service;

import com.tunism.tunism.entity.Event;
import com.tunism.tunism.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

        @Autowired
        private EventRepository eventRepository;
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event updateEvent(Long id, Event eventDetails) {
        Event event = eventRepository.findById(id).orElseThrow(() -> new RuntimeException("Event not found"));
        event.setName(eventDetails.getName());
        event.setDetails(eventDetails.getDetails());
        event.setLocation(eventDetails.getLocation());
        event.setDate(eventDetails.getDate());
        return eventRepository.save(event);
    }

    public boolean deleteEvent(Long id) {
        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
            return true;
        }
        return false;
    }





        public Event saveEvent(Event event) {
            return eventRepository.save(event);
        }

    public List<Event> searchEvents(String query) {
        return eventRepository.findByNameContainingIgnoreCaseOrLocationContainingIgnoreCase(query, query);
    }

        // Additional methods for updating and deleting events
    }


