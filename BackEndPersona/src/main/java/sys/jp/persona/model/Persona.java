package sys.jp.persona.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table (name = "persona")
public class Persona {
	
	private int id;
	private String nombre;
	private String apellido;
	private int edad;
	
	private Pais pais;
	private Estado estado;
}
