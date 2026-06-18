package com.upad.registropreventa.adapter.in.web.dto;

import com.upad.registropreventa.domain.model.Lead;

import java.time.LocalDateTime;
import java.util.UUID;

public class LeadResponse {

    private UUID id;
    private String nombreCompleto;
    private String correoElectronico;
    private String rol;
    private LocalDateTime fechaRegistro;

    public LeadResponse() {
    }

    public static LeadResponse fromDomain(Lead lead) {
        LeadResponse response = new LeadResponse();
        response.id = lead.getId();
        response.nombreCompleto = lead.getNombreCompleto();
        response.correoElectronico = lead.getCorreoElectronico();
        response.rol = lead.getRol().name();
        response.fechaRegistro = lead.getFechaRegistro();
        return response;
    }

    public UUID getId() {
        return id;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public String getRol() {
        return rol;
    }

    public LocalDateTime getFechaRegistro() {
        return fechaRegistro;
    }
}
