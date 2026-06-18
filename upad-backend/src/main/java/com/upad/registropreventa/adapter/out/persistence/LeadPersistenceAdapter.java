package com.upad.registropreventa.adapter.out.persistence;

import com.upad.registropreventa.domain.model.Lead;
import com.upad.registropreventa.domain.model.Rol;
import com.upad.registropreventa.port.out.LeadRepositoryPort;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Component
public class LeadPersistenceAdapter implements LeadRepositoryPort {

    private final LeadJpaRepository leadJpaRepository;

    public LeadPersistenceAdapter(LeadJpaRepository leadJpaRepository) {
        this.leadJpaRepository = leadJpaRepository;
    }

    @Override
    public Lead guardar(Lead lead) {
        LeadJpaEntity entity = toEntity(lead);
        LeadJpaEntity saved = leadJpaRepository.save(entity);
        return toDomain(saved);
    }

    @Override
    public boolean existePorCorreo(String correoElectronico) {
        return leadJpaRepository.existsByCorreoElectronico(correoElectronico);
    }

    @Override
    public List<Lead> obtenerTodos() {
        return leadJpaRepository.findAll()
                .stream()
                .map(this::toDomain)
                .toList();
    }

    @Override
    public Optional<Lead> obtenerPorId(UUID id) {
        return leadJpaRepository.findById(id)
                .map(this::toDomain);
    }

    // ── Mappers ──
    private LeadJpaEntity toEntity(Lead lead) {
        LeadJpaEntity entity = new LeadJpaEntity();
        entity.setId(lead.getId());
        entity.setNombreCompleto(lead.getNombreCompleto());
        entity.setCorreoElectronico(lead.getCorreoElectronico());
        entity.setRol(lead.getRol());
        entity.setFechaRegistro(lead.getFechaRegistro());
        return entity;
    }

    private Lead toDomain(LeadJpaEntity entity) {
        return new Lead(
                entity.getId(),
                entity.getNombreCompleto(),
                entity.getCorreoElectronico(),
                entity.getRol(),
                entity.getFechaRegistro()
        );
    }
}
