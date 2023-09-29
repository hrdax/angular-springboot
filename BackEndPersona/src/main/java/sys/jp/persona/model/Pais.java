package sys.jp.persona.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table (name = "pais")
public class Pais {
	private int id;
	private String nombre;
}
