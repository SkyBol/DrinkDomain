package com.example.demo.domain.drinks;

import com.example.demo.core.generic.AbstractRepository;
import com.example.demo.core.generic.AbstractServiceImpl;
import org.springframework.stereotype.Service;


@Service

public class DrinkServiceImpl extends AbstractServiceImpl<Drink> implements DrinkService {

    public DrinkServiceImpl(AbstractRepository<Drink> repository) {
        super(repository);
    }

}
