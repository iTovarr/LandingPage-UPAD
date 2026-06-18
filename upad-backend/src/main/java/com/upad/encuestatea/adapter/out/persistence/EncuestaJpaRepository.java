package com.upad.encuestatea.adapter.out.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface EncuestaJpaRepository extends JpaRepository<EncuestaJpaEntity, UUID> {
}
