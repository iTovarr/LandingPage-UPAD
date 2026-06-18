package com.upad.registropreventa.adapter.in.web;

import com.upad.registropreventa.adapter.in.web.dto.LeadRequest;
import com.upad.registropreventa.adapter.in.web.dto.LeadResponse;
import com.upad.registropreventa.domain.model.Lead;
import com.upad.registropreventa.domain.model.Rol;
import com.upad.registropreventa.port.in.RegistrarLeadUseCase;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/preventa")
public class PreventaController {

    private final RegistrarLeadUseCase registrarLeadUseCase;

    public PreventaController(RegistrarLeadUseCase registrarLeadUseCase) {
        this.registrarLeadUseCase = registrarLeadUseCase;
    }

    @PostMapping
    public ResponseEntity<?> registrar(@Valid @RequestBody LeadRequest request) {
        try {
            Rol rol = Rol.fromString(request.getRol());
            Lead lead = Lead.crear(request.getNombreCompleto(), request.getCorreoElectronico(), rol);
            Lead leadRegistrado = registrarLeadUseCase.registrar(lead);
            return ResponseEntity.status(HttpStatus.CREATED).body(LeadResponse.fromDomain(leadRegistrado));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<List<LeadResponse>> listar() {
        List<LeadResponse> leads = registrarLeadUseCase.obtenerTodos()
                .stream()
                .map(LeadResponse::fromDomain)
                .toList();
        return ResponseEntity.ok(leads);
    }
}
