package com.example.demo.core.exception;

public class DrinkAlreadyExistsException extends RuntimeException {
    public DrinkAlreadyExistsException(String message) {
        super(message);
    }
}
