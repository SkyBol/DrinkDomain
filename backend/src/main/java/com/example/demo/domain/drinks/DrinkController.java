package com.example.demo.domain.drinks;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

import com.example.demo.core.exception.DrinkAlreadyExistsException;
import com.example.demo.core.exception.DrinkNotFoundException;
import com.example.demo.core.exception.ErrorResponse;
import com.example.demo.domain.drinks.dto.DrinkDTO;
import com.example.demo.domain.drinks.dto.DrinkMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping("/drink")
public class DrinkController {

    private final DrinkService drinkService;
    private final DrinkMapper drinkMapper;

    @Autowired
    public DrinkController(DrinkService drinkService, DrinkMapper drinkMapper) {
        this.drinkService = drinkService;
        this.drinkMapper = drinkMapper;
    }

    @GetMapping("/{id}")
    public ResponseEntity<DrinkDTO> retrieveDrink(@PathVariable String id) {
        try {
            UUID uuid = UUID.fromString(id);
            Drink drink = drinkService.findById(uuid);
            return ResponseEntity.ok(drinkMapper.toDTO(drink));
        } catch (DrinkNotFoundException | NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping({"", "/"})
    public ResponseEntity<List<DrinkDTO>> retrieveAll() {
        try {
            List<Drink> drinks = drinkService.findAll();
            return new ResponseEntity<>(drinkMapper.toDTOs(drinks), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/")
    public ResponseEntity<DrinkDTO> save(@Valid @RequestBody DrinkDTO drinkDTO) {
        try {
            Drink drink = drinkService.save(drinkMapper.fromDTO(drinkDTO));
            return new ResponseEntity<>(drinkMapper.toDTO(drink), HttpStatus.CREATED);
        } catch (DrinkAlreadyExistsException e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<DrinkDTO> updateById(@PathVariable UUID id, @Valid @RequestBody DrinkDTO drinkDTO) {
        try {
            Drink drink = drinkService.updateById(id, drinkMapper.fromDTO(drinkDTO));
            return new ResponseEntity<>(drinkMapper.toDTO(drink), HttpStatus.OK);
        } catch (DrinkNotFoundException | NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) {
        try {
            drinkService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (DrinkNotFoundException | NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ExceptionHandler(DrinkNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorResponse> handleDrinkNotFoundException(DrinkNotFoundException e) {
        // Create an ErrorResponse object using the exception message
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND.value(), e.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DrinkAlreadyExistsException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<ErrorResponse> handleDrinkAlreadyExistsException(DrinkAlreadyExistsException e) {
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_MODIFIED.value(), e.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.CONFLICT);
    }


}