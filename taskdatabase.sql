-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 20, 2020 at 02:30 PM
-- Server version: 5.7.18
-- PHP Version: 7.2.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `taskdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createddate` datetime NOT NULL,
  `updateddate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`, `createddate`, `updateddate`) VALUES
(1, 'Electronics', '2020-02-20 00:00:00', '2020-02-20 00:00:00'),
(2, 'Sports', '2020-02-20 00:00:00', '2020-02-20 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `categoriesId` int(11) NOT NULL,
  `product` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createddate` datetime NOT NULL,
  `updateddate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `categoriesId`, `product`, `createddate`, `updateddate`) VALUES
(1, 1, 'Television', '2020-02-20 00:00:00', '2020-02-20 00:00:00'),
(2, 1, 'Washing maching', '2020-02-20 00:00:00', '2020-02-20 00:00:00'),
(3, 1, 'Refrigerator', '2020-02-20 00:00:00', '2020-02-20 00:00:00'),
(4, 1, 'Air conditioner', '2020-02-20 00:00:00', '2020-02-20 00:00:00'),
(5, 2, 'Cricket', '2020-02-20 00:00:00', '2020-02-20 00:00:00'),
(6, 2, 'Football', '2020-02-20 00:00:00', '2020-02-20 00:00:00'),
(7, 2, 'Hockey', '2020-02-20 00:00:00', '2020-02-20 00:00:00'),
(8, 2, 'Basketball', '2020-02-20 00:00:00', '2020-02-20 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_foreignkey` (`categoriesId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `category_foreignkey` FOREIGN KEY (`categoriesId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
