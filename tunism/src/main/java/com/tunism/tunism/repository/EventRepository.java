package com.tunism.tunism.repository;

import com.tunism.tunism.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository  extends JpaRepository<Event, Long> {
    List<Event> findByNameContainingIgnoreCaseOrLocationContainingIgnoreCase(String name, String location);

}
