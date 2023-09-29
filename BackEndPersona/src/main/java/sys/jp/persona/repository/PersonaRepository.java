package sys.jp.persona.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sys.jp.persona.model.Persona;

public interface PersonaRepository extends JpaRepository<Persona, Long>{

}
