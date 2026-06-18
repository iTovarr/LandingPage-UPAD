package com.upad.registropreventa.domain.model;

import java.time.LocalDateTime;
import java.util.UUID;
import java.util.regex.Pattern;

public class Lead {

    private static final Pattern EMAIL_PATTERN =
            Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$");

    private UUID id;
    private String nombreCompleto;
    private String correoElectronico;
    private Rol rol;
    private LocalDateTime fechaRegistro;

    public Lead(UUID id, String nombreCompleto, String correoElectronico, Rol rol, LocalDateTime fechaRegistro) {
        validarNombreCompleto(nombreCompleto);
        validarCorreoElectronico(correoElectronico);
        validarRol(rol);

        this.id = id;
        this.nombreCompleto = nombreCompleto.trim();
        this.correoElectronico = correoElectronico.trim().toLowerCase();
        this.rol = rol;
        this.fechaRegistro = fechaRegistro != null ? fechaRegistro : LocalDateTime.now();
    }

    // ── Factory method para creación de nuevos leads ──
    public static Lead crear(String nombreCompleto, String correoElectronico, Rol rol) {
        return new Lead(null, nombreCompleto, correoElectronico, rol, LocalDateTime.now());
    }

    // ── Validaciones de negocio ──
    private void validarNombreCompleto(String nombre) {
        if (nombre == null || nombre.trim().isEmpty()) {
            throw new IllegalArgumentException("El nombre completo es obligatorio");
        }
        if (nombre.trim().length() < 3) {
            throw new IllegalArgumentException("El nombre completo debe tener al menos 3 caracteres");
        }
        if (nombre.trim().length() > 150) {
            throw new IllegalArgumentException("El nombre completo no puede exceder 150 caracteres");
        }
    }

    private void validarCorreoElectronico(String correo) {
        if (correo == null || correo.trim().isEmpty()) {
            throw new IllegalArgumentException("El correo electrónico es obligatorio");
        }
        if (!EMAIL_PATTERN.matcher(correo.trim()).matches()) {
            throw new IllegalArgumentException("El formato del correo electrónico es inválido");
        }
    }

    private void validarRol(Rol rol) {
        if (rol == null) {
            throw new IllegalArgumentException("El rol es obligatorio (PADRE o DOCENTE)");
        }
    }

    // ── Getters (sin setters para inmutabilidad) ──
    public UUID getId() {
        return id;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public Rol getRol() {
        return rol;
    }

    public LocalDateTime getFechaRegistro() {
        return fechaRegistro;
    }

    // ── Para reconstrucción desde persistencia ──
    public void asignarId(UUID id) {
        this.id = id;
    }
}
