package sys.jp.persona.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "estado")
public class Estado {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private Pais pais;
	private String nombre;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Pais getPais() {
		return pais;
	}
	public void setPais(Pais pais) {
		this.pais = pais;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	
	public Estado(Pais pais, String nombre) {
		super();
		this.pais = pais;
		this.nombre = nombre;
	}
	
	
	
	
}
