package com.example.user_service.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.user_service.Entity.Usuario;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.example.user_service.Security.JwtUtil;
import com.example.user_service.Service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private static final Logger logger = LoggerFactory.getLogger(UsuarioController.class);

    @Autowired
    private UsuarioService usuarioService;

    // 1. INJETA o JwtUtil (bean)
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/cadastro")
    public Usuario cadastrarUsuario(@RequestBody Usuario usuario){
        return usuarioService.cadastrarUsuario(usuario);
    }
    @PostMapping("/verificar")
    public ResponseEntity<?> verificarConta(@RequestParam String codigo) {
        try {
            usuarioService.verificarUsuarioPeloCodigo(codigo);
            return ResponseEntity.ok().body(Map.of("message", "Conta verificada!"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/listagem")
    public ResponseEntity<?> listarTodosUsuarios(@RequestHeader(value = "Authorization", required = false) String authHeader){
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body(Map.of("error", "Token ausente ou inválido"));
        }

        String token = authHeader.substring(7);
        try {
            Long userId = jwtUtil.getUserIdFromToken(token);
            Usuario requester = usuarioService.buscarPorId(userId);
            if (requester == null || requester.getRole() == null || !requester.getRole().equals("ADMIN")) {
                return ResponseEntity.status(403).body(Map.of("error", "Acesso negado"));
            }

            return ResponseEntity.ok(usuarioService.listarUsuarios());
        } catch (io.jsonwebtoken.JwtException ex) {
            logger.error("Token inválido ao acessar /usuario/listagem: {}", ex.getMessage());
            return ResponseEntity.status(401).body(Map.of("error", "Token inválido"));
        } catch (RuntimeException ex) {
            logger.error("Erro ao processar /usuario/listagem", ex);
            return ResponseEntity.status(500).body(Map.of("error", ex.getMessage()));
        }
    }


    @GetMapping("/buscar/{id}")
    public Usuario filtrarPorId(@PathVariable Long id) {
        return usuarioService.buscarPorId(id);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarUsuario(@PathVariable Long id, @RequestHeader(value = "Authorization", required = false) String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body(Map.of("error", "Token ausente ou inválido"));
        }

        String token = authHeader.substring(7);
        try {
            Long userId = jwtUtil.getUserIdFromToken(token);
            Usuario requester = usuarioService.buscarPorId(userId);
            if (requester == null || requester.getRole() == null || !requester.getRole().equals("ADMIN")) {
                return ResponseEntity.status(403).body(Map.of("error", "Acesso negado"));
            }

            usuarioService.deletarUsuario(id);
            return ResponseEntity.noContent().build();
        } catch (io.jsonwebtoken.JwtException ex) {
            logger.error("Token inválido ao deletar usuário: {}", ex.getMessage());
            return ResponseEntity.status(401).body(Map.of("error", "Token inválido"));
        } catch (RuntimeException ex) {
            logger.error("Erro ao deletar usuário", ex);
            return ResponseEntity.status(500).body(Map.of("error", ex.getMessage()));
        }
    }

    @PutMapping("/{id}")
    public Usuario atualizarUsuario(@PathVariable Long id, @RequestBody Usuario dadosAtualizados) {
        Usuario usuarioExistente = usuarioService.buscarPorId(id);
        usuarioService.atualizarUsuario(
                usuarioExistente,
                dadosAtualizados.getNomeUsuario(),
                dadosAtualizados.getEmailUsuario(),
                dadosAtualizados.getSenhaUsuario()
        );
        return usuarioExistente;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario loginData) {
        Usuario usuario = usuarioService.autenticarUsuario(loginData.getCpfUsuario(), loginData.getSenhaUsuario());
        
        String token = jwtUtil.generateToken(usuario.getIdUsuario());

        return ResponseEntity.ok().body(Map.of(
                "token", token,
                "usuario", usuario
        ));
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body(Map.of("error", "Token ausente ou inválido"));
        }

        String token = authHeader.substring(7);
        try {
            Long userId = jwtUtil.getUserIdFromToken(token);
            Usuario u = usuarioService.buscarPorId(userId);
            return ResponseEntity.ok(u);
        } catch (io.jsonwebtoken.JwtException ex) {
            // Log details for developers/ops, but return a generic message to client
            logger.error("Token inválido ao acessar /usuario/me: {}", ex.getMessage());
            return ResponseEntity.status(401).body(Map.of("error", "Token inválido"));
        } catch (RuntimeException ex) {
            logger.error("Erro ao buscar usuário em /usuario/me", ex);
            return ResponseEntity.status(404).body(Map.of("error", ex.getMessage()));
        }
    }
}