package com.example.Denuncia_Service.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Denuncia_Service.Entity.Denuncia;
@Repository
public interface DenunciaRepository extends JpaRepository<Denuncia, Long> {
    List<Denuncia> findByCategoria(String categoria);
    List<Denuncia> findByTitulo(String titulo);
    Optional<Denuncia> findById(Long idDenuncia);
    List<Denuncia> findByNomeEmpresa(String nomeEmpresa);
    
    @org.springframework.data.jpa.repository.Modifying
    @org.springframework.data.jpa.repository.Query("UPDATE Denuncia d SET d.status = :status WHERE d.idDenuncia = :id")
    int updateStatusById(@org.springframework.data.repository.query.Param("id") Long id, @org.springframework.data.repository.query.Param("status") String status);
    

}
