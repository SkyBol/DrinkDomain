package com.example.demo.domain.drinks.dto;

import com.example.demo.core.generic.AbstractMapper;
import com.example.demo.domain.drinks.Drink;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface DrinkMapper extends AbstractMapper<Drink, DrinkDTO> {
}
