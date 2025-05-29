package com.tunism.tunism.repository;

import com.tunism.tunism.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByEventId(Long eventId);

}
