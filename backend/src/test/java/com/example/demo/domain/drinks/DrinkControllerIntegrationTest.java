package com.example.demo.domain.drinks;

import com.example.demo.domain.drinks.dto.DrinkDTO;
import com.example.demo.domain.drinks.dto.DrinkMapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.util.UUID;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class DrinkControllerIntegrationTest  {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private DrinkMapper drinkMapper;

    @Autowired
    private DrinkService drinkService;


    @Test
    @Order(1)
    void testRetrieveDrink_Success() throws Exception {
        mockMvc.perform(get("/drink/1d269fb3-50d7-4c6f-8d6c-ae5029d8bfc1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.strDrink").value("Test Drink 1"))
                .andExpect(jsonPath("$.strTags").value("Shot"));
    }

    @Test
    @Order(2)
    void testRetrieveDrink_NotFound() throws Exception {
        mockMvc.perform(get("/drink/0f390802-4d54-449c-943c-0048bc22eac3"))
                .andExpect(status().isNotFound());
    }

    @Test
    @Order(3)
    void testRetrieveAllDrinks() throws Exception {
        mockMvc.perform(get("/drink/"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(3)) // Should return one drink
                .andExpect(jsonPath("$[0].strDrink").value("Test Drink 1"))
                .andExpect(jsonPath("$[0].strTags").value("Shot"));
    }

    @Test
    @Order(4)
    void testSaveDrink_Success() throws Exception {
        mockMvc.perform(post("/drink/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(generateTestDrink())))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.strDrink").value("Test Generated Drink"))
                .andExpect(jsonPath("$.strTags").value("Generated"));
    }

    @Test
    @Order(5)
    void testUpdateDrink_Success() throws Exception {
        var drink = drinkService.save(drinkMapper.fromDTO(generateTestDrink()));
        drink.setStrDrink("Test Generated Drink Changed");

        mockMvc.perform(put("/drink/{id}", drink.getId().toString())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(drink)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.strDrink").value("Test Generated Drink Changed"));
    }

    @Test
    @Order(6)
    void testUpdateDrink_NotFound() throws Exception {
        DrinkDTO dto = generateTestDrink();
        mockMvc.perform(put("/drink/{id}", dto.getId().toString())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isNotFound());
    }

    @Test
    @Order(7)
    void testDeleteDrink_Success() throws Exception {
        var drink = drinkService.save(drinkMapper.fromDTO(generateTestDrink()));

        mockMvc.perform(delete("/drink/{id}", drink.getId().toString()))
                .andExpect(status().isNoContent());
    }

    @Test
    @Order(8)
    void testDeleteDrink_NotFound() throws Exception {
        mockMvc.perform(delete("/drink/{id}", UUID.randomUUID()))
                .andExpect(status().isNotFound());
    }


    private DrinkDTO generateTestDrink() {
        var drinkDTO = new DrinkDTO();

        drinkDTO.setStrDrink("Test Generated Drink");
        drinkDTO.setId(UUID.randomUUID());
        drinkDTO.setIdDrink(drinkDTO.getId().toString());
        drinkDTO.setStrTags("Generated");
        drinkDTO.setStrIngredient1("Generation");
        drinkDTO.setStrIngredient2("Test");
        drinkDTO.setStrMeasure1("1");
        drinkDTO.setStrMeasure2("2");
        drinkDTO.setStrGlass("TEST");
        drinkDTO.setStrAlcoholic("alcoholic");
        drinkDTO.setStrCategory("Generated");
        drinkDTO.setStrCreativeCommonsConfirmed("yes");
        drinkDTO.setStrDrinkThumb("");
        drinkDTO.setStrInstructions("");

        return drinkDTO;
    }
}
