package com.upad.registropreventa.domain.model;

public enum Rol {
    PADRE,
    DOCENTE;

    public static Rol fromString(String value) {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException("El rol no puede estar vacío");
        }
        try {
            return Rol.valueOf(value.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException(
                    "Rol inválido: '" + value + "'. Los valores permitidos son: PADRE, DOCENTE");
        }
    }
}
