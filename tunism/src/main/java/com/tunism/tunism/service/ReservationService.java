package com.tunism.tunism.service;

import com.tunism.tunism.entity.Reservation;
import com.tunism.tunism.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation saveReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
    public List<Reservation> findReservationsByEventId(Long eventId) {
        return reservationRepository.findByEventId(eventId);
    }

}
