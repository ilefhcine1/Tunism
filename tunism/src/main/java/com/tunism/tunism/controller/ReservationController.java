package com.tunism.tunism.controller;

import com.tunism.tunism.entity.Reservation;
import com.tunism.tunism.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;
    @GetMapping
    public List<Reservation> getReservationsByEventId(@RequestParam Long eventId) {
        return reservationService.findReservationsByEventId(eventId);
    }

    @PostMapping
    public Reservation createReservation(@RequestBody Reservation reservation) {
        return reservationService.saveReservation(reservation);
    }
}
