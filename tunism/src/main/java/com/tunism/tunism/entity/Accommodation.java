package com.tunism.tunism.entity;

import jakarta.persistence.*;
import com.tunism.tunism.enums.AccommodationType;

@Entity
@Table(name = "accommodations")
public class Accommodation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAcc")
    private Long id;

    @Column(name = "nameAcc", nullable = false)
    private String name;

    @Column(name = "descriptionAcc", columnDefinition = "TEXT")
    private String description;

    @ManyToOne
    @JoinColumn(name = "destination_id", referencedColumnName = "id")
    private Destination destination;

    @Enumerated(EnumType.STRING)
    @Column(name = "typeAcc", nullable = false)
    private AccommodationType type;

    // Constructors, getters, setters, and other methods

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }

    public AccommodationType getType() {
        return type;
    }

    public void setType(AccommodationType type) {
        this.type = type;
    }
}