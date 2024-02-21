package com.example.demo.domain.listener;

import com.example.demo.core.generic.AbstractEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Listener extends AbstractEntity {
    @Column(name = "api-key")
    private String apiKey;
<<<<<<< Updated upstream
    @Column(length = 1024)
=======
    @Column(length = 1023)
>>>>>>> Stashed changes
    private String value;
}
