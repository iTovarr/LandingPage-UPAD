package com.upad.encuestatea.adapter.in.web;

import com.upad.encuestatea.adapter.in.web.dto.EncuestaRequest;
import com.upad.encuestatea.adapter.in.web.dto.EncuestaResponse;
import com.upad.encuestatea.domain.model.Encuesta;
import com.upad.encuestatea.port.in.RegistrarEncuestaUseCase;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/encuesta")
public class EncuestaController {

    private final RegistrarEncuestaUseCase registrarEncuestaUseCase;

    public EncuestaController(RegistrarEncuestaUseCase registrarEncuestaUseCase) {
        this.registrarEncuestaUseCase = registrarEncuestaUseCase;
    }

    @PostMapping
    public ResponseEntity<?> registrar(@Valid @RequestBody EncuestaRequest request) {
        try {
            Encuesta encuesta = Encuesta.crear(
                    request.getLeadId(),
                    request.getPregunta1Ansiedad(),
                    request.getPregunta2HerramientaActual(),
                    request.getPregunta3InteresCompra()
            );
            Encuesta registrada = registrarEncuestaUseCase.registrar(encuesta);
            return ResponseEntity.status(HttpStatus.CREATED).body(EncuestaResponse.fromDomain(registrada));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<List<EncuestaResponse>> listar() {
        List<EncuestaResponse> encuestas = registrarEncuestaUseCase.obtenerTodas()
                .stream()
                .map(EncuestaResponse::fromDomain)
                .toList();
        return ResponseEntity.ok(encuestas);
    }
}
