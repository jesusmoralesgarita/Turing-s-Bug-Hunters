-- ENTRADA DE DATOS --

USE tinta_nom;

-- categorias --
INSERT INTO categorias (categoria)
VALUES ("Playeras"), ("Tazas"), ("Sudaderas"), ("Vasos"), ("Plumas"), ("Pines"), ("Stickers"), ("Descuentos");
SELECT * FROM categorias;

-- productos --
INSERT INTO productos (id_categoria, nombre, precio, diseno, descripcion, cantidad, imagen, descuento, color, talla, stock)
VALUES
-- Playera básica
(1, 'Playera Básica', 199.99, 1, 'Playera de algodón 100% con diseño personalizado', 50, 'playera.jpg', 10, 'Blanco', 'M', 100),
-- Sudadera con capucha
(3, 'Sudadera con Capucha', 499.50, 1, 'Sudadera cómoda con diseño estampado', 30, 'sudadera.jpg', 15, 'Negro', 'L', 80),
-- Taza personalizada
(2, 'Taza Personalizada', 149.00, 1, 'Taza de cerámica con sublimación a color', 100, 'taza.jpg', 5, 'Rojo', NULL, 200),
-- Playera deportiva
(1, 'Playera Deportiva', 249.75, 1, 'Playera ligera para entrenamiento', 40, 'playera_deportiva.jpg', 20, 'Azul', 'S', 60),
-- Sudadera ligera
(3, 'Sudadera Ligera', 399.00, 1, 'Sudadera de tela suave ideal para clima fresco', 25, 'sudadera_ligera.jpg', 0, 'Gris', 'M', 70);
SELECT * FROM productos;

-- usuario --
INSERT INTO usuario (nombre, apellidos, correo_electronico, direccion, numero_telefonico, contrasena)
VALUES
('Carlos', 'Ramírez', 'carlos.ramirez01@example.com', 'Av. Reforma 123, CDMX', '5512345678', 'Pass#1234'),
('María', 'González', 'maria.gonzalez02@example.com', 'Calle Juárez 45, Guadalajara', '5523456789', 'M4ria$2024'),
('Luis', 'Hernández', 'luis.hernandez03@example.com', 'Av. Insurgentes Sur 789, CDMX', '5534567890', 'Lu1s*Secure'),
('Ana', 'Martínez', 'ana.martinez04@example.com', 'Calle 5 de Mayo 22, Puebla', '5545678901', 'Ana@2025'),
('Jorge', 'López', 'jorge.lopez05@example.com', 'Blvd. Kukulcán 100, Cancún', '5556789012', 'J0rge#Pass'),
('Sofía', 'Pérez', 'sofia.perez06@example.com', 'Av. Universidad 300, CDMX', '5567890123', 'Sofi@123'),
('Diego', 'Sánchez', 'diego.sanchez07@example.com', 'Calle Hidalgo 67, Monterrey', '5578901234', 'D13go$Pass'),
('Lucía', 'Torres', 'lucia.torres08@example.com', 'Av. Vallarta 456, Guadalajara', '5589012345', 'Lucia#2025'),
('Fernando', 'Flores', 'fernando.flores09@example.com', 'Calle Morelos 89, Toluca', '5590123456', 'Fer*Secure1'),
('Valeria', 'Castro', 'valeria.castro10@example.com', 'Av. Constitución 150, Monterrey', '5501234567', 'Val3ria@Pwd');
SELECT * FROM usuario;

-- pedidos --
INSERT INTO pedidos (id_usuario, fecha_pedido, direccion, rastreador)
VALUES
(1,'2026-03-02 12:23:45', 'Av. Reforma 123, CDMX', 'TK12345'),
(2,'1000-12-24 00:00:00', 'JERUSALEN', 'TK666'),
(3,'2025-11-15 12:23:45', 'Av. Insurgentes Sur 789, CDMX', 'TK54321'),
(4,'2026-04-02 16:40:54', 'Calle 5 de Mayo 22, Puebla', 'TK4122345'),
(5,'2026-04-28 18:24:34', 'Calle 5 de Mayo 22, Puebla', 'TK4122345');
SELECT * FROM pedidos;

-- detalles_pedidos --
INSERT INTO detalles_pedidos (id_pedido, productos_id_producto, cantidad_producto, precio_total, imagen, estado_pedido) 
VALUES
(1, 4, 2, 200.00, "url/imagen1.png", "En espera"),
(2, 3, 1, 180.00, "url/imagen2.png", "Procesando"),
(3, 2, 3, 350.00, "url/imagen3.png", "Enviado"),
(4, 1, 1, 299.99, "url/imagen4.png", "Recibido"),
(5, 1, 2, 249.99, "url/imagen5.png", "Recibido");
SELECT * FROM detalles_pedidos;

-- reviews --
INSERT INTO reviews (pedidos_id_pedido, calificacion, comentario, fecha_review) 
VALUES
(1, 5.0, 'Excelente producto', '2024-04-30'),
(2, 4.5, 'Muy bueno pero tardó un poco', '2024-04-30'),
(3, 3.0, 'Regular, esperaba más', '2024-04-30'),
(4, 5.0, 'Me encantó la calidad', '2024-04-30'),
(5, 4.0, 'Buen servicio al cliente', '2024-04-30');
SELECT * FROM reviews;



