package com.upad.registropreventa.port.in;

import com.upad.registropreventa.domain.model.Lead;

import java.util.List;

public interface RegistrarLeadUseCase {

    Lead registrar(Lead lead);

    List<Lead> obtenerTodos();
}
