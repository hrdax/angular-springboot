package sys.jp.persona.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table (name = "persona")
public class Persona {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String nombre;
	private String apellido;
	private int edad;
	
	@ManyToOne
	@JoinColumn (name = "id_pais")
	private Pais pais;
	@JoinColumn (name = "id_estado")
	private Estado estado;
}
