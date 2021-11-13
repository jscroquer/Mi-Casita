-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-11-2021 a las 23:35:28
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodega`
--

CREATE TABLE `bodega` (
  `productosbodega` varchar(200) NOT NULL,
  `codigobodega` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bodega`
--

INSERT INTO `bodega` (`productosbodega`, `codigobodega`) VALUES
('15000', '10001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogo`
--

CREATE TABLE `catalogo` (
  `productocatalogo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `catalogo`
--

INSERT INTO `catalogo` (`productocatalogo`) VALUES
('10001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `valorcompra` varchar(200) NOT NULL,
  `codigocompra` int(200) NOT NULL,
  `proveedorcompra` varchar(200) NOT NULL,
  `productocompra` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`valorcompra`, `codigocompra`, `proveedorcompra`, `productocompra`) VALUES
('15000', 10001, 'Toys', '500'),
('5000', 10002, 'Toys Toys', '250');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `impo`
--

CREATE TABLE `impo` (
  `valorimpo` varchar(200) NOT NULL,
  `codigoimpo` varchar(200) NOT NULL,
  `paisimpo` varchar(200) NOT NULL,
  `proveedorimpo` varchar(200) NOT NULL,
  `ivaimpo` varchar(200) NOT NULL,
  `transporteimpo` varchar(200) NOT NULL,
  `aduanaimpo` varchar(200) NOT NULL,
  `productoimpo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `impo`
--

INSERT INTO `impo` (`valorimpo`, `codigoimpo`, `paisimpo`, `proveedorimpo`, `ivaimpo`, `transporteimpo`, `aduanaimpo`, `productoimpo`) VALUES
('12000', '100001', 'USA', 'Toys', '1440', '2000', '1000', '1000'),
('15000', '100002', 'USA', 'Toys Toys', '1800', '2000', '1000', '1000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `codigoventa` varchar(200) NOT NULL,
  `cantidadventa` varchar(200) NOT NULL,
  `valorventa` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`codigoventa`, `cantidadventa`, `valorventa`) VALUES
('10001', '125', '5000'),
('10002', '125', '7560');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bodega`
--
ALTER TABLE `bodega`
  ADD PRIMARY KEY (`productosbodega`);

--
-- Indices de la tabla `catalogo`
--
ALTER TABLE `catalogo`
  ADD PRIMARY KEY (`productocatalogo`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`valorcompra`);

--
-- Indices de la tabla `impo`
--
ALTER TABLE `impo`
  ADD PRIMARY KEY (`valorimpo`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`codigoventa`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
