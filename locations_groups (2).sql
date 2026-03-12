-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 12, 2026 at 05:17 AM
-- Server version: 10.6.25-MariaDB
-- PHP Version: 8.4.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `launc42632_directory`
--

-- --------------------------------------------------------

--
-- Table structure for table `locations_groups`
--

CREATE TABLE `locations_groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `data_name` varchar(255) NOT NULL,
  `page_link` varchar(500) DEFAULT NULL,
  `page_title` varchar(255) DEFAULT NULL,
  `page_description` longtext DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `location_ids` varchar(500) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `order` int(11) NOT NULL DEFAULT 9999,
  `faq_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `locations_groups`
--

INSERT INTO `locations_groups` (`id`, `name`, `data_name`, `page_link`, `page_title`, `page_description`, `image`, `status`, `location_ids`, `created_at`, `updated_at`, `order`, `faq_image`) VALUES
(6, 'Private Islands', 'private_islands_group', 'wedding-venues-private-islands-group', 'Short Term Rental Wedding Venues on Private Islands', '', '/Uploads/1756357865_1000003176.jpg', 1, '71', '2025-08-27 01:31:55', '2026-02-02 07:17:30', 8, '/Uploads/1765431195_faq_1756468421_faq_vlad-ion-JxVKrjA9Gq4-unsplash (1).jpg'),
(8, 'United States of America', 'usa', 'wedding-venues-usa', 'Short Term Rental Wedding Venues in the USA', 'From vibrant city escapes to peaceful coastal retreats, the United States is filled with unforgettable destinations. Whether you’re chasing adventure in the mountains, relaxing by the beach, or discovering hidden gems in small towns, there’s a perfect stay waiting for you. Find handpicked vacation rentals that bring comfort, style, and convenience to every journey.', '/Uploads/1756272917_UnitedStatesofAmerica.jpg', 1, '1,3,5,7,9,190,188,15,17,19,21,23,25,27,29,31,33,35,37,39,186,43,45,47,49,2,4,6,8,189,12,14,16,18,20,22,24,26,187,30,32,34,36,38,40,42,44,46,48,50,11,13,41,10,28', '2025-08-27 01:35:17', '2025-12-11 03:25:12', 1, '/Uploads/1765433010_faq_1756466365_faq_1756466094_faq_caleb-perez-a6h5e59r15o-unsplash (1).jpg'),
(9, 'Mexico', 'mexico_group', 'wedding-venues-mexico-group', 'Short Term Rental Wedding Venues in Mexico', '', '/Uploads/1756357748_1000003184.jpg', 1, '58', '2025-08-27 01:42:54', '2026-02-02 07:17:41', 3, '/Uploads/1765433158_faq_1756466308_faq_barbara-zandoval-JClyJLTzb-E-unsplash (2).jpg'),
(12, 'Canada', 'canada', 'wedding-venues-canada-group', ' Short Term Rental Wedding Venues in Canada ', '', '/Uploads/1756357764_1000003183.jpg', 1, '57', '2025-08-27 01:45:32', '2026-02-05 08:47:45', 4, '/Uploads/1765433243_faq_1756466655_faq_marcin-skalij-AhmLdXl_azU-unsplash (1).jpg'),
(15, 'Caribbean', 'caribbean', 'wedding-venues-caribbean', 'Short Term Rental Wedding Venues in Caribbean', '', '/Uploads/1765429929_1756357735_1000003187.jpg', 1, '129,51,199,55,65,67,126,69,56,54,60,62,64,66,68,70,72,61', '2025-12-11 00:12:09', '2025-12-11 00:13:15', 2, '/Uploads/1765429929_faq_1756466409_faq_1756464483_faq_istockphoto-1407509583-2048x2048-Photoroo.jpeg'),
(16, 'Central America', 'central_america', 'wedding-venues-central-america', 'Short Term Rental Wedding Venues in Central America', '', '/Uploads/1765430101_1756357779_1000003178.jpg', 1, '53,63,130,128,127,52', '2025-12-11 00:15:01', '2025-12-11 00:15:06', 5, '/Uploads/1765430101_faq_1756467433_faq_berti-benbanaste-2hkDhGEZVBg-unsplash (1).jpg'),
(17, 'South America', 'south_america', 'wedding-venues-south-america', 'Short Term Rental Wedding Venues in South America', '', '/Uploads/1765430190_1756357791_1000003182.jpg', 1, '59', '2025-12-11 00:16:30', '2025-12-11 01:09:37', 6, '/Uploads/1765430190_faq_1756467711_faq_natalya-letunova-FYr3roIu51g-unsplash (1).jpg'),
(18, 'Europe', 'europe', 'wedding-venues-europe', 'Short Term Rental Wedding Venues in Europe', '', '/Uploads/1765430870_1756357808_1000003177.jpg', 1, '217,218,219,185,234', '2025-12-11 00:27:50', '2026-01-09 09:09:01', 7, '/Uploads/1765430870_faq_1756467787_faq_anthony-delanoix-aDxmYZtYj7g-unsplash (1).jpg'),
(19, 'Asia', 'asia', 'wedding-venues-asia', ' Short Term Rental Wedding Venues in Asia', '', '/Uploads/1765430988_1756357821_1000003179.jpg', 1, '', '2025-12-11 00:29:48', '2025-12-11 00:29:48', 9, '/Uploads/1765430988_faq_1756467883_faq_christian-joudrey-9bdt03k4ujw-unsplash (1).jpg'),
(20, 'Africa', 'africa', 'wedding-venues-africa', 'Short Term Rental Wedding Venues in Africa', '', '/Uploads/1765431124_1756357833_1000003181.jpg', 1, '', '2025-12-11 00:32:04', '2025-12-11 00:32:04', 10, '/Uploads/1765431124_faq_1756467988_faq_sutirta-budiman-kjOBqwMUnWw-unsplash (1).jpg'),
(21, 'Oceania', 'Oceania', 'wedding-venues-oceania', 'Short Term Rental Wedding Venues in Oceania', '', '/Uploads/1765431563_1756357851_1000003180.jpg', 1, '220,221,222', '2025-12-11 00:39:23', '2025-12-11 00:39:23', 11, '/Uploads/1765431563_faq_1756468498_faq_juhi-sewchurran-SyvMLKxQivA-unsplash (1).jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `locations_groups`
--
ALTER TABLE `locations_groups`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `locations_groups`
--
ALTER TABLE `locations_groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
