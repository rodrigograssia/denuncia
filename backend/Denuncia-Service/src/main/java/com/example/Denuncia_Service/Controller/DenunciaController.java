package com.example.Denuncia_Service.Controller;

import com.example.Denuncia_Service.Entity.Denuncia;
import com.example.Denuncia_Service.Security.JwtUtil;
import com.example.Denuncia_Service.Service.DenunciaService;
import com.example.Denuncia_Service.Service.TelefoneReputacaoService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/denuncia")
public class DenunciaController {
    @Autowired
    private DenunciaService denunciaService;
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private TelefoneReputacaoService telefoneReputacaoService;

    @PostMapping("/cadastrar")
    public ResponseEntity<Denuncia> criarDenuncia(@RequestBody Denuncia denuncia,
                                                  @RequestHeader("Authorization") String token) {
        Long idUsuario = jwtUtil.getUserIdFromToken(token.replace("Bearer ", ""));

        denuncia.setIdUsuario(idUsuario);

        Denuncia saved = denunciaService.salvar(denuncia);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{idDenuncia}")
    public Denuncia filtrarPorId(@PathVariable Long idDenuncia) {
        return denunciaService.buscarPorId(idDenuncia);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarDenuncia(@PathVariable Long id
                                               ) {
        denunciaService.deletarDenuncia(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/concluir")
    public ResponseEntity<Denuncia> concluirDenuncia(@PathVariable Long id,
                                                     @RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).build();
        }
        // valida token (vai lançar exceção se inválido)
        jwtUtil.getUserIdFromToken(authHeader.replace("Bearer ", ""));

        // atualiza apenas a coluna status para evitar regravar outros campos que possam ser nulos
        Denuncia updated = denunciaService.concluirPorId(id);
        return ResponseEntity.ok(updated);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Denuncia>> listarDenuncias(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).build();
        }

        String token = authHeader.replace("Bearer ", "");
        // valida token e obtém o ID do usuário
        Long userId = jwtUtil.getUserIdFromToken(token);

        // Lista apenas as denúncias do usuário logado
        List<Denuncia> denuncias = denunciaService.listarDenunciasPorUsuario(userId);
        return ResponseEntity.ok(denuncias);
    }

    @GetMapping("/listar-todas")
    public ResponseEntity<List<Denuncia>> listarTodasDenuncias(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).build();
        }

        String token = authHeader.replace("Bearer ", "");
        // valida token (vai lançar exceção se inválido)
        jwtUtil.getUserIdFromToken(token);

        // Retorna todas as denúncias do sistema (para admins)
        List<Denuncia> denuncias = denunciaService.listarDenuncias();
        return ResponseEntity.ok(denuncias);
    }

    @GetMapping("/verificar-reputacao")
    public ResponseEntity<?> verificarReputacao(
            @RequestParam String telefone
    ) {
        // Endpoint público - não requer autenticação
        Object reputacao = telefoneReputacaoService.buscarReputacao(telefone);

        return ResponseEntity.ok(reputacao);
    }

}
