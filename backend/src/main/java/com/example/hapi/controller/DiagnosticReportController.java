package com.example.hapi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import com.example.hapi.model.DiagnosticReport;

import reactor.core.publisher.Mono;

@RestController
public class DiagnosticReportController {

    private final WebClient webClient;

    public DiagnosticReportController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://hapi.fhir.org/baseR4").build();
    }

    @PostMapping("/diagnostic-report")
    public Mono<String> sendDiagnosticReport(@RequestBody DiagnosticReport diagnosticReport) {
        return webClient.post()
                .uri("/DiagnosticReport")
                .body(Mono.just(diagnosticReport), DiagnosticReport.class)
                .retrieve()
                .bodyToMono(String.class)
                .onErrorResume(WebClientResponseException.class, ex -> {
                    return Mono.just("Error: " + ex.getMessage() + " - " + ex.getResponseBodyAsString());
                });
    }

    @GetMapping("/diagnostic-report/{id}")
    public Mono<String> getDiagnosticReport(@PathVariable String id) {
        return webClient.get()
                .uri("/DiagnosticReport/" + id)
                .retrieve()
                .bodyToMono(String.class)
                .onErrorResume(WebClientResponseException.class, ex -> {
                    return Mono.just("Error: " + ex.getMessage() + " - " + ex.getResponseBodyAsString());
                });
    }

    @PutMapping("/diagnostic-report/{id}")
    public Mono<String> updateDiagnosticReport(@RequestBody DiagnosticReport diagnosticReport,
            @PathVariable String id) {
        return webClient.put()
                .uri("/DiagnosticReport/" + id)
                .body(Mono.just(diagnosticReport), DiagnosticReport.class)
                .retrieve()
                .bodyToMono(String.class)
                .onErrorResume(WebClientResponseException.class, ex -> {
                    return Mono.just("Error: " + ex.getMessage() + " - " + ex.getResponseBodyAsString());
                });
    }

    @ExceptionHandler(WebClientResponseException.class)
    public ResponseEntity<String> handleWebClientResponseException(WebClientResponseException ex) {
        return new ResponseEntity<>(ex.getResponseBodyAsString(), ex.getStatusCode());
    }
}
