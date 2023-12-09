package Snezhana_11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Snezhana_11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Производитель
 */
@Entity(name = "IISSnezhana_11Производитель")
@Table(schema = "public", name = "Производитель")
public class Proizvoditel {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Производитель")
    private String производитель;

    @Column(name = "Страна")
    private String страна;


    public Proizvoditel() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПроизводитель() {
      return производитель;
    }

    public void setПроизводитель(String производитель) {
      this.производитель = производитель;
    }

    public String getСтрана() {
      return страна;
    }

    public void setСтрана(String страна) {
      this.страна = страна;
    }


}