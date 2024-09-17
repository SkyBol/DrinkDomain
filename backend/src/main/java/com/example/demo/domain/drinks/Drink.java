package com.example.demo.domain.drinks;

import com.example.demo.core.generic.AbstractEntity;
import com.example.demo.domain.role.Role;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Table(name = "drink")
@NoArgsConstructor
@Getter
@Setter
@Accessors(chain = true)
public class Drink extends AbstractEntity {


  @Column(name = "id_drink", nullable = false)
  private String idDrink;

  @Column(name = "str_drink", nullable = false)
  private String strDrink;

  @Column(name = "str_drink_alternate")
  private String strDrinkAlternate;

  @Column(name = "str_tags")
  private String strTags;

  @Column(name = "str_video")
  private String strVideo;

  @Column(name = "str_category", nullable = false)
  private String strCategory;

  @Column(name = "str_iba")
  private String strIBA;

  @Column(name = "str_alcoholic", nullable = false)
  private String strAlcoholic;

  @Column(name = "str_glass", nullable = false)
  private String strGlass;

  @Column(name = "str_instructions", nullable = false)
  private String strInstructions;

  @Column(name = "str_instructions_es")
  private String strInstructionsES;

  @Column(name = "str_instructions_de")
  private String strInstructionsDE;

  @Column(name = "str_instructions_fr")
  private String strInstructionsFR;

  @Column(name = "str_instructions_it")
  private String strInstructionsIT;

  @Column(name = "str_instructions_zh_hans")
  private String strInstructionsZH_HANS;

  @Column(name = "str_instructions_zh_hant")
  private String strInstructionsZH_HANT;

  @Column(name = "str_drink_thumb", nullable = false)
  private String strDrinkThumb;

  @Column(name = "str_ingredient1", nullable = false)
  private String strIngredient1;

  @Column(name = "str_ingredient2", nullable = false)
  private String strIngredient2;

  @Column(name = "str_ingredient3")
  private String strIngredient3;

  @Column(name = "str_ingredient4")
  private String strIngredient4;

  @Column(name = "str_ingredient5")
  private String strIngredient5;

  @Column(name = "str_ingredient6")
  private String strIngredient6;

  @Column(name = "str_ingredient7")
  private String strIngredient7;

  @Column(name = "str_ingredient8")
  private String strIngredient8;

  @Column(name = "str_ingredient9")
  private String strIngredient9;

  @Column(name = "str_ingredient10")
  private String strIngredient10;

  @Column(name = "str_ingredient11")
  private String strIngredient11;

  @Column(name = "str_ingredient12")
  private String strIngredient12;

  @Column(name = "str_ingredient13")
  private String strIngredient13;

  @Column(name = "str_ingredient14")
  private String strIngredient14;

  @Column(name = "str_ingredient15")
  private String strIngredient15;

  @Column(name = "str_measure1")
  private String strMeasure1;

  @Column(name = "str_measure2")
  private String strMeasure2;

  @Column(name = "str_measure3")
  private String strMeasure3;

  @Column(name = "str_measure4")
  private String strMeasure4;

  @Column(name = "str_measure5")
  private String strMeasure5;

  @Column(name = "str_measure6")
  private String strMeasure6;

  @Column(name = "str_measure7")
  private String strMeasure7;

  @Column(name = "str_measure8")
  private String strMeasure8;

  @Column(name = "str_measure9")
  private String strMeasure9;

  @Column(name = "str_measure10")
  private String strMeasure10;

  @Column(name = "str_measure11")
  private String strMeasure11;

  @Column(name = "str_measure12")
  private String strMeasure12;

  @Column(name = "str_measure13")
  private String strMeasure13;

  @Column(name = "str_measure14")
  private String strMeasure14;

  @Column(name = "str_measure15")
  private String strMeasure15;

  @Column(name = "str_image_source")
  private String strImageSource;

  @Column(name = "str_image_attribution")
  private String strImageAttribution;

  @Column(name = "str_creative_commons_confirmed", nullable = false)
  private String strCreativeCommonsConfirmed;

  @Column(name = "date_modified")
  private String dateModified;

  public Drink(String idDrink, String strDrink, String strDrinkAlternate, String strTags, String strVideo,
               String strCategory, String strIBA, String strAlcoholic, String strGlass, String strInstructions,
               String strInstructionsES, String strInstructionsDE, String strInstructionsFR, String strInstructionsIT,
               String strInstructionsZH_HANS, String strInstructionsZH_HANT, String strDrinkThumb,
               String strIngredient1, String strIngredient2, String strIngredient3, String strIngredient4,
               String strIngredient5, String strIngredient6, String strIngredient7, String strIngredient8,
               String strIngredient9, String strIngredient10, String strIngredient11, String strIngredient12,
               String strIngredient13, String strIngredient14, String strIngredient15, String strMeasure1,
               String strMeasure2, String strMeasure3, String strMeasure4, String strMeasure5, String strMeasure6,
               String strMeasure7, String strMeasure8, String strMeasure9, String strMeasure10, String strMeasure11,
               String strMeasure12, String strMeasure13, String strMeasure14, String strMeasure15, String strImageSource,
               String strImageAttribution, String strCreativeCommonsConfirmed, String dateModified) {
    this.idDrink = idDrink;
    this.strDrink = strDrink;
    this.strDrinkAlternate = strDrinkAlternate;
    this.strTags = strTags;
    this.strVideo = strVideo;
    this.strCategory = strCategory;
    this.strIBA = strIBA;
    this.strAlcoholic = strAlcoholic;
    this.strGlass = strGlass;
    this.strInstructions = strInstructions;
    this.strInstructionsES = strInstructionsES;
    this.strInstructionsDE = strInstructionsDE;
    this.strInstructionsFR = strInstructionsFR;
    this.strInstructionsIT = strInstructionsIT;
    this.strInstructionsZH_HANS = strInstructionsZH_HANS;
    this.strInstructionsZH_HANT = strInstructionsZH_HANT;
    this.strDrinkThumb = strDrinkThumb;
    this.strIngredient1 = strIngredient1;
    this.strIngredient2 = strIngredient2;
    this.strIngredient3 = strIngredient3;
    this.strIngredient4 = strIngredient4;
    this.strIngredient5 = strIngredient5;
    this.strIngredient6 = strIngredient6;
    this.strIngredient7 = strIngredient7;
    this.strIngredient8 = strIngredient8;
    this.strIngredient9 = strIngredient9;
    this.strIngredient10 = strIngredient10;
    this.strIngredient11 = strIngredient11;
    this.strIngredient12 = strIngredient12;
    this.strIngredient13 = strIngredient13;
    this.strIngredient14 = strIngredient14;
    this.strIngredient15 = strIngredient15;
    this.strMeasure1 = strMeasure1;
    this.strMeasure2 = strMeasure2;
    this.strMeasure3 = strMeasure3;
    this.strMeasure4 = strMeasure4;
    this.strMeasure5 = strMeasure5;
    this.strMeasure6 = strMeasure6;
    this.strMeasure7 = strMeasure7;
    this.strMeasure8 = strMeasure8;
    this.strMeasure9 = strMeasure9;
    this.strMeasure10 = strMeasure10;
    this.strMeasure11 = strMeasure11;
    this.strMeasure12 = strMeasure12;
    this.strMeasure13 = strMeasure13;
    this.strMeasure14 = strMeasure14;
    this.strMeasure15 = strMeasure15;
    this.strImageSource = strImageSource;
    this.strImageAttribution = strImageAttribution;
    this.strCreativeCommonsConfirmed = strCreativeCommonsConfirmed;
    this.dateModified = dateModified;
  }
}