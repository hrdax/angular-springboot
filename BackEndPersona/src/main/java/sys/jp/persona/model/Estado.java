package sys.jp.persona.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table (name = "estado")
public class Estado {
	private int id;
	private Pais pais;
	private String nombre;
}
