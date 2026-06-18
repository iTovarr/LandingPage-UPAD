package com.upad.encuestatea.adapter.out.persistence;

import com.upad.encuestatea.domain.model.Encuesta;
import com.upad.encuestatea.port.out.EncuestaRepositoryPort;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EncuestaPersistenceAdapter implements EncuestaRepositoryPort {

    private final EncuestaJpaRepository encuestaJpaRepository;

    public EncuestaPersistenceAdapter(EncuestaJpaRepository encuestaJpaRepository) {
        this.encuestaJpaRepository = encuestaJpaRepository;
    }

    @Override
    public Encuesta guardar(Encuesta encuesta) {
        EncuestaJpaEntity entity = toEntity(encuesta);
        EncuestaJpaEntity saved = encuestaJpaRepository.save(entity);
        return toDomain(saved);
    }

    @Override
    public List<Encuesta> obtenerTodas() {
        return encuestaJpaRepository.findAll()
                .stream()
                .map(this::toDomain)
                .toList();
    }

    // ── Mappers ──
    private EncuestaJpaEntity toEntity(Encuesta encuesta) {
        EncuestaJpaEntity entity = new EncuestaJpaEntity();
        entity.setId(encuesta.getId());
        entity.setLeadId(encuesta.getLeadId());
        entity.setPregunta1Ansiedad(encuesta.getPregunta1Ansiedad());
        entity.setPregunta2HerramientaActual(encuesta.getPregunta2HerramientaActual());
        entity.setPregunta3InteresCompra(encuesta.getPregunta3InteresCompra());
        return entity;
    }

    private Encuesta toDomain(EncuestaJpaEntity entity) {
        return new Encuesta(
                entity.getId(),
                entity.getLeadId(),
                entity.getPregunta1Ansiedad(),
                entity.getPregunta2HerramientaActual(),
                entity.getPregunta3InteresCompra()
        );
    }
}
