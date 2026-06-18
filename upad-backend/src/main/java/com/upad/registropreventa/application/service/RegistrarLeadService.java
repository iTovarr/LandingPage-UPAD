package com.upad.registropreventa.application.service;

import com.upad.registropreventa.domain.model.Lead;
import com.upad.registropreventa.port.in.RegistrarLeadUseCase;
import com.upad.registropreventa.port.out.LeadRepositoryPort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RegistrarLeadService implements RegistrarLeadUseCase {

    private final LeadRepositoryPort leadRepositoryPort;

    public RegistrarLeadService(LeadRepositoryPort leadRepositoryPort) {
        this.leadRepositoryPort = leadRepositoryPort;
    }

    @Override
    public Lead registrar(Lead lead) {
        if (leadRepositoryPort.existePorCorreo(lead.getCorreoElectronico())) {
            throw new IllegalStateException(
                    "Ya existe un registro con el correo: " + lead.getCorreoElectronico());
        }
        return leadRepositoryPort.guardar(lead);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Lead> obtenerTodos() {
        return leadRepositoryPort.obtenerTodos();
    }
}
