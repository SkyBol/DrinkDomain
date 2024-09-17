package com.example.demo.domain.drinks;

import com.example.demo.domain.drinks.dto.DrinkDTO;
import com.example.demo.domain.drinks.dto.DrinkMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class DrinkControllerTest {

    private MockMvc mockMvc;

    @Mock
    private DrinkService drinkService;

    @Mock
    private DrinkMapper drinkMapper;

    @InjectMocks
    private DrinkController drinkController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(drinkController).build();
    }


    /**
     * Test the retrieval of a drink by ID (good outcome).
     * This test verifies that a valid drink ID returns a drinkDTO object with the correct ID.
     */
   @Test
   public void testRetrieveById() throws Exception {
       UUID id = UUID.randomUUID();
       DrinkDTO drinkDTO = new DrinkDTO();
       drinkDTO.setId(id);
       Drink drink = new Drink();
       drink.setId(id);

       when(drinkService.findById(id)).thenReturn(drink);
       when(drinkMapper.toDTO(drink)).thenReturn(drinkDTO);

       mockMvc.perform(get("/drink/{id}", id))
               .andExpect(status().isOk())
               .andExpect(content().contentType(MediaType.APPLICATION_JSON))
               .andExpect(jsonPath("$.id").value(id.toString()));

       verify(drinkService, times(1)).findById(id);
       verify(drinkMapper, times(1)).toDTO(drink);
   }

    /**
     * Test the retrieval of a drink by ID (bad outcome).
     * This test verifies that an invalid drink ID returns a 404 Not Found status.
     */
    @Test
    public void testRetrieveById_BadRequest() throws Exception {
        String invalidId = "invalid-uuid";

        // Perform the GET request with an invalid ID, expecting a 400 Bad Request status
        mockMvc.perform(get("/drink/{id}", invalidId))
                .andExpect(status().isBadRequest());

        // Verify that the service was not called
        verify(drinkService, never()).findById(any());
        verify(drinkMapper, never()).toDTO(any()); // Should not be called
    }

    /**
     * Test the retrieval of all drinks (good outcome).
     * This test verifies that a request to get all drinks returns a non-empty list of drinkDTOs.
     */
    @Test
    public void testRetrieveAll_GoodOutcome() throws Exception {
        DrinkDTO drinkDTO = new DrinkDTO();
        Drink drink = new Drink();

        when(drinkService.findAll()).thenReturn(Collections.singletonList(drink));
        when(drinkMapper.toDTOs(Collections.singletonList(drink))).thenReturn(Collections.singletonList(drinkDTO));

        mockMvc.perform(get("/drink"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[0]").exists());

        verify(drinkService, times(1)).findAll();
        verify(drinkMapper, times(1)).toDTOs(Collections.singletonList(drink));
    }

    /**
     * Test the retrieval of all drinks (bad outcome).
     * This test verifies that a request to get all drinks returns an empty list when there are no drinks.
     */
    @Test
    public void testRetrieveAll_BadOutcome() throws Exception {
        when(drinkService.findAll()).thenReturn(Collections.emptyList());
        when(drinkMapper.toDTOs(Collections.emptyList())).thenReturn(Collections.emptyList());

        mockMvc.perform(get("/drink"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").isEmpty());

        verify(drinkService, times(1)).findAll();
        verify(drinkMapper, times(1)).toDTOs(Collections.emptyList());
    }

    /**
     * Test the saving of a new drink (good outcome).
     * This test verifies that a valid drinkDTO is correctly saved and returns the saved drinkDTO.
     */
    @Test
    public void testSave_GoodOutcome() throws Exception {
        DrinkDTO drinkDTO = new DrinkDTO();
        Drink drink = new Drink();

        when(drinkMapper.fromDTO(any(DrinkDTO.class))).thenReturn(drink);
        when(drinkService.save(any(Drink.class))).thenReturn(drink);
        when(drinkMapper.toDTO(any(Drink.class))).thenReturn(drinkDTO);

        mockMvc.perform(post("/drink/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Coke\"}")) // Add valid JSON content here.
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));

        verify(drinkMapper, times(1)).fromDTO(any(DrinkDTO.class));
        verify(drinkService, times(1)).save(any(Drink.class));
        verify(drinkMapper, times(1)).toDTO(any(Drink.class));
    }

    /**
     * Test the saving of a new drink (bad outcome).
     * This test verifies that attempting to save an invalid drinkDTO returns a 400 Bad Request status.
     */
    @Test
    public void testSave_BadOutcome() throws Exception {
        mockMvc.perform(post("/drink/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("")) // Invalid (empty) JSON content.
                .andExpect(status().isBadRequest());

        verify(drinkMapper, times(0)).fromDTO(any(DrinkDTO.class));
        verify(drinkService, times(0)).save(any(Drink.class));
    }

    /**
     * Test the update of an existing drink by ID (good outcome).
     * This test verifies that a valid drinkDTO is correctly updated and returns the updated drinkDTO.
     */
    @Test
    public void testUpdateById_GoodOutcome() throws Exception {
        UUID id = UUID.randomUUID();
        DrinkDTO drinkDTO = new DrinkDTO();
        Drink drink = new Drink();

        when(drinkMapper.fromDTO(any(DrinkDTO.class))).thenReturn(drink);
        when(drinkService.updateById(eq(id), any(Drink.class))).thenReturn(drink);
        when(drinkMapper.toDTO(any(Drink.class))).thenReturn(drinkDTO);

        mockMvc.perform(put("/drink/{id}", id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Pepsi\"}")) // Add valid JSON content here.
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));

        verify(drinkMapper, times(1)).fromDTO(any(DrinkDTO.class));
        verify(drinkService, times(1)).updateById(eq(id), any(Drink.class));
        verify(drinkMapper, times(1)).toDTO(any(Drink.class));
    }

    /**
     * Test the update of an existing drink by ID (bad outcome).
     * This test verifies that an attempt to update a drink with invalid data returns a 400 Bad Request status.
     */
    @Test
    public void testUpdateById_BadOutcome() throws Exception {
        UUID id = UUID.randomUUID();

        mockMvc.perform(put("/drink/{id}", id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("")) // Invalid (empty) JSON content.
                .andExpect(status().isBadRequest());

        verify(drinkMapper, times(0)).fromDTO(any(DrinkDTO.class));
        verify(drinkService, times(0)).updateById(eq(id), any(Drink.class));
    }

    /**
     * Test the deletion of a drink by ID (good outcome).
     * This test verifies that a valid drink ID correctly triggers the deletion process.
     */
    @Test
    public void testDeleteById_GoodOutcome() throws Exception {
        UUID id = UUID.randomUUID();

        doNothing().when(drinkService).deleteById(id);

        mockMvc.perform(delete("/drink/{id}", id))
                .andExpect(status().isNoContent());

        verify(drinkService, times(1)).deleteById(id);
    }

    /**
     * Test the deletion of a drink by ID (bad outcome).
     * This test verifies that an invalid drink ID returns a 404 Not Found status.
     */
    @Test
    public void testDeleteById_BadOutcome() throws Exception {
        UUID id = UUID.randomUUID();

        doThrow(new RuntimeException("Drink not found")).when(drinkService).deleteById(id);

        mockMvc.perform(delete("/drink/{id}", id))
                .andExpect(status().isInternalServerError());

        verify(drinkService, times(1)).deleteById(id);
    }
}
