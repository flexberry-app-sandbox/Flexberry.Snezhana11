package Snezhana_11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Snezhana_11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиент
 */
@Entity(name = "IISSnezhana_11Клиент")
@Table(schema = "public", name = "Клиент")
public class Klient {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "mail")
    private String mail;

    @Column(name = "Логин")
    private String логин;

    @Column(name = "Пароль")
    private String пароль;


    public Klient() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public String getmail() {
      return mail;
    }

    public void setmail(String mail) {
      this.mail = mail;
    }

    public String getЛогин() {
      return логин;
    }

    public void setЛогин(String логин) {
      this.логин = логин;
    }

    public String getПароль() {
      return пароль;
    }

    public void setПароль(String пароль) {
      this.пароль = пароль;
    }


}