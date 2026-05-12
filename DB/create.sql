-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema tinta_nom
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tinta_nom
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tinta_nom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `tinta_nom` ;

-- -----------------------------------------------------
-- Table `tinta_nom`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tinta_nom`.`categorias` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tinta_nom`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tinta_nom`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `apellidos` VARCHAR(50) NOT NULL,
  `correo_electronico` VARCHAR(100) NOT NULL,
  `direccion` VARCHAR(200) NOT NULL,
  `numero_telefonico` VARCHAR(15) NOT NULL,
  `contrasena` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tinta_nom`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tinta_nom`.`pedidos` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `fecha_pedido` DATETIME NOT NULL,
  `direccion` VARCHAR(200) NOT NULL,
  `rastreador` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  INDEX `id_usuario` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `pedidos_ibfk_1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `tinta_nom`.`usuario` (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tinta_nom`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tinta_nom`.`productos` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `id_categoria` INT NULL DEFAULT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `precio` INT NOT NULL,
  `diseno` TINYINT(1) NULL DEFAULT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `cantidad` INT NULL DEFAULT NULL,
  `imagen` VARCHAR(255) NULL DEFAULT NULL,
  `descuento` INT NULL DEFAULT NULL,
  `color` VARCHAR(50) NULL DEFAULT NULL,
  `talla` VARCHAR(10) NULL DEFAULT NULL,
  `stock` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_producto`),
  INDEX `id_categoria` (`id_categoria` ASC) VISIBLE,
  CONSTRAINT `productos_ibfk_2`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `tinta_nom`.`categorias` (`id_categoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tinta_nom`.`detalles_pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tinta_nom`.`detalles_pedidos` (
  `id_detalle` INT NOT NULL AUTO_INCREMENT,
  `id_pedido` INT NOT NULL,
  `productos_id_producto` INT NOT NULL,
  `cantidad_producto` INT NOT NULL,
  `precio_total` DOUBLE NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `estado_pedido` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id_detalle`),
  INDEX `id_pedido` (`id_pedido` ASC) VISIBLE,
  INDEX `fk_detalles_pedidos_productos1_idx` (`productos_id_producto` ASC) VISIBLE,
  CONSTRAINT `detalles_pedidos_ibfk_1`
    FOREIGN KEY (`id_pedido`)
    REFERENCES `tinta_nom`.`pedidos` (`id_pedido`),
  CONSTRAINT `fk_detalles_pedidos_productos1`
    FOREIGN KEY (`productos_id_producto`)
    REFERENCES `tinta_nom`.`productos` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `tinta_nom`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tinta_nom`.`reviews` (
  `id_reviews` INT NOT NULL AUTO_INCREMENT,
  `pedidos_id_pedido` INT NOT NULL,
  `calificacion` DECIMAL(2,1) NOT NULL,
  `comentario` VARCHAR(250) NOT NULL,
  `fecha_review` DATE NOT NULL,
  PRIMARY KEY (`id_reviews`),
  INDEX `fk_reviews_pedidos1_idx` (`pedidos_id_pedido` ASC) VISIBLE,
  CONSTRAINT `fk_reviews_pedidos1`
    FOREIGN KEY (`pedidos_id_pedido`)
    REFERENCES `tinta_nom`.`pedidos` (`id_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

