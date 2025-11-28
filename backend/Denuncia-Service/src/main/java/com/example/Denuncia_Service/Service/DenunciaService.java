package com.example.Denuncia_Service.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.Denuncia_Service.Entity.Denuncia;
import com.example.Denuncia_Service.Repository.DenunciaRepository;

@Service
public class DenunciaService {

    private final DenunciaRepository denunciaRepository;


    @Autowired
    public DenunciaService(DenunciaRepository denunciaRepository) {
        this.denunciaRepository = denunciaRepository;
    
    }



    public Denuncia salvar(Denuncia denuncia) {
        // Define status padrão se não foi informado
        if (denuncia.getStatus() == null || denuncia.getStatus().isEmpty()) {
            denuncia.setStatus("PENDENTE");
        }
        return denunciaRepository.save(denuncia);
    }

    public Denuncia buscarPorId(Long idDenuncia) {
       return denunciaRepository.findById(idDenuncia).orElseThrow(()-> new RuntimeException("Denuncia não encontrada"));
    }
    
    @Transactional
    public Denuncia concluirPorId(Long id) {
        // atualiza apenas a coluna de status para evitar regravar campos nulos/transientes
        denunciaRepository.updateStatusById(id, "CONCLUÍDA");
        return buscarPorId(id);
    }
    public List<Denuncia> buscarPorNome(String nomeEmpresa){
        return denunciaRepository.findByNomeEmpresa(nomeEmpresa);
    }
    

    public void deletarDenuncia(Long idDenuncia) {
        denunciaRepository.findById(idDenuncia);
    }

    public List<Denuncia> listarDenuncias(){
        return denunciaRepository.findAll();
    }

    public List<Denuncia> listarDenunciasPorUsuario(Long idUsuario){
        return denunciaRepository.findByIdUsuario(idUsuario);
    }




}
