package com.upad.registropreventa.port.out;

import com.upad.registropreventa.domain.model.Lead;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface LeadRepositoryPort {

    Lead guardar(Lead lead);

    boolean existePorCorreo(String correoElectronico);

    List<Lead> obtenerTodos();

    Optional<Lead> obtenerPorId(UUID id);
}
