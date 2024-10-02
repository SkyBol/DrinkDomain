package com.example.demo.core.generic.filter;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.lang.reflect.Field;

public abstract class AbstractSpecifications {
  public static <T> Specification<T> filter(DynamicFilter filter) {
    return (Root<T> root, CriteriaQuery<?> query, CriteriaBuilder cb) -> {
      Predicate predicate = cb.conjunction();

      for (Field field : filter.getClass().getDeclaredFields()) {
        if (field.isAnnotationPresent(Filterable.class)) {
          field.setAccessible(true);
          Object value = null;

          try {
            value = field.get(filter);
          } catch (IllegalAccessException e) {
            e.printStackTrace();
          }

          if (value != null) {
            predicate = cb.and(predicate, cb.like(root.get(field.getName()), "%" + value + "%"));
          }
        }
      }

      return predicate;
    };
  }
}
