-- MySQL Script generated by MySQL Workbench
-- Mon Dec  5 15:09:10 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sportapp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sportapp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sportapp` DEFAULT CHARACTER SET utf8 ;
USE `sportapp` ;

-- -----------------------------------------------------
-- Table `sportapp`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportapp`.`user` (
  `iduser` VARCHAR(150) NOT NULL,
  `mail` VARCHAR(60) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `bio` VARCHAR(300) NULL,
  `gender` ENUM("male", "female") NULL,
  `categorie` VARCHAR(30) NULL,
  `imageuser` VARCHAR(500) NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sportapp`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportapp`.`post` (
  `idpost` INT NOT NULL AUTO_INCREMENT,
  `postedat` VARCHAR(200) NULL,
  `posttitle` VARCHAR(300) NOT NULL,
  `postcontent` TEXT(10844) NOT NULL,
  `postimage` VARCHAR(500) NULL,
  `categorie` VARCHAR(45) NOT NULL,
  `likes` INT NULL DEFAULT 0,
  `user_iduser` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idpost`, `user_iduser`),
  INDEX `fk_post_user_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_post_user`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `sportapp`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sportapp`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sportapp`.`comment` (
  `idcomment` INT NOT NULL AUTO_INCREMENT,
  `commentcontent` VARCHAR(500) NOT NULL,
  `likes` INT NULL DEFAULT 0,
  `user_iduser` VARCHAR(150) NOT NULL,
  `post_idpost` INT NOT NULL,
  PRIMARY KEY (`idcomment`, `user_iduser`, `post_idpost`),
  INDEX `fk_comment_user1_idx` (`user_iduser` ASC) VISIBLE,
  INDEX `fk_comment_post1_idx` (`post_idpost` ASC) VISIBLE,
  CONSTRAINT `fk_comment_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `sportapp`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comment_post1`
    FOREIGN KEY (`post_idpost`)
    REFERENCES `sportapp`.`post` (`idpost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
