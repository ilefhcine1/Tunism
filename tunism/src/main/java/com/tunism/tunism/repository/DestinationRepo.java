package com.tunism.tunism.repository;

import com.tunism.tunism.entity.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DestinationRepo extends JpaRepository<Destination, Long> {

}
