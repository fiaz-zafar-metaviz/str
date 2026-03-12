-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 12, 2026 at 04:58 AM
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
-- Table structure for table `vacation_states`
--

CREATE TABLE `vacation_states` (
  `id` int(11) NOT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `data_name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `mini_image` varchar(500) DEFAULT NULL,
  `gif` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'state',
  `rental_type` varchar(255) NOT NULL DEFAULT 'vacation',
  `featured` varchar(255) DEFAULT '0',
  `parent_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `country_group_id` int(11) NOT NULL,
  `group_id` int(11) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vacation_states`
--

INSERT INTO `vacation_states` (`id`, `sort_order`, `name`, `data_name`, `image`, `mini_image`, `gif`, `type`, `rental_type`, `featured`, `parent_id`, `country_id`, `country_group_id`, `group_id`, `created_on`, `updated_on`, `is_deleted`) VALUES
(1, 1, 'Alabama', 'alabama', '/photos/display/stateimg_6785288c643e43.61971806.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 09:59:10', '2025-03-10 09:24:21', 0),
(2, 26, 'Montana', 'montana', '/photos/display/stateimg_6787565ed78e29.32884666.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 09:59:10', '2025-01-15 06:31:58', 0),
(3, 2, 'Alaska', 'alaska', '/photos/display/stateimg_6785294b677c68.04899069.jpg', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-02 09:59:10', '2025-02-21 11:45:16', 0),
(4, 27, 'Nebraska', 'nebraska', '/photos/display/img_67ce7eaac2ab68.63264045.jpg', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-02 09:59:10', '2025-03-10 05:54:50', 0),
(5, 3, 'Arizona', 'arizona', '/photos/display/stateimg_6787531d38e919.99162711.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 09:59:10', '2025-01-15 06:18:05', 0),
(6, 28, 'Nevada', 'nevada', '/photos/display/stateimg_678756889edfd2.91987526.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 09:59:10', '2025-01-15 06:32:40', 0),
(7, 4, 'Arkansas', 'arkansas', '/photos/display/img_67f0d7274668c1.51980489.jpeg', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-02 09:59:10', '2025-04-05 07:09:27', 0),
(8, 29, 'New Hampshire', 'new_hampshire', '/photos/display/stateimg_678756a3099cb1.98206876.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 09:59:10', '2025-01-15 06:33:07', 0),
(9, 5, 'California', 'california', '/photos/display/stateimg_6787538a342147.93731504.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 09:59:10', '2025-01-15 06:19:54', 0),
(10, 30, 'New Jersey', 'new_jersey', '/photos/display/img_68cbd9e7b469c7.99572692.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 09:59:10', '2025-01-15 06:33:24', 0),
(11, 6, 'Colorado', 'colorado', '/photos/display/img_68071da3ad07e2.91798545.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:21:23', 0),
(12, 31, 'New Mexico', 'new_mexico', '/photos/display/stateimg_678756ca4f6c51.36099994.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:33:46', 0),
(13, 7, 'Connecticut', 'connecticut', '/photos/display/img_68071e70cfe1e3.83611652.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:21:50', 0),
(14, 32, 'New York', 'new_york', '/photos/display/stateimg_678756dac0a2e4.64512205.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:34:02', 0),
(15, 8, 'Delaware', 'delaware', '/photos/display/stateimg_67875464d5a224.17388261.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:23:32', 0),
(16, 33, 'North Carolina', 'north_carolina', '/photos/display/stateimg_678756f155c4f5.05170211.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:34:25', 0),
(17, 9, 'Florida', 'florida', '/photos/display/stateimg_678754978935f4.59121311.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:24:23', 0),
(18, 34, 'North Dakota', 'north_dakota', '/photos/display/stateimg_6787572d753294.70113639.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:35:25', 0),
(19, 10, 'Georgia', 'georgia', '/photos/display/state603eaedf52ce74ed3dbd088aff8268c36a65a882.png', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-07-10 13:01:30', 0),
(20, 35, 'Ohio', 'ohio', '/photos/display/stateimg_6787574ab75305.88505874.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:35:54', 0),
(21, 11, 'Hawaii', 'hawaii', '/photos/display/stateimg_678754c513cdd9.27816992.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:25:09', 0),
(22, 36, 'Oklahoma', 'oklahoma', '/photos/display/stateimg_678757598a5261.55702145.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:36:09', 0),
(23, 12, 'Idaho', 'idaho', '/photos/display/stateimg_678754d8daccf3.31783283.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:25:28', 0),
(24, 37, 'Oregon', 'oregon', '/photos/display/stateimg_67875769df0fd3.32919733.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:36:25', 0),
(25, 13, 'Illinois', 'illinois', '/photos/display/stateimg_678754ec0c0931.54634587.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:25:48', 0),
(26, 38, 'Pennsylvania', 'pennsylvania', '/photos/display/stateimg_6787579574d631.96248373.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:37:09', 0),
(27, 14, 'Indiana', 'indiana', '/photos/display/stateimg_6787550d6e3ed5.28017518.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:26:21', 0),
(28, 39, 'Rhode Island', 'rhode_island', '/photos/display/img_68071e451df268.72462400.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:38:03', 0),
(29, 15, 'Iowa', 'iowa', '/photos/display/stateimg_678755261f0750.82654013.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:26:46', 0),
(30, 40, 'South Carolina', 'south_carolina', '/photos/display/stateimg_678757f06bb1d3.57432103.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:00:09', '2025-01-15 06:38:40', 0),
(31, 16, 'Kansas', 'kansas', '/photos/display/stateimg_678755510c56b6.45499461.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:27:29', 0),
(32, 41, 'South Dakota', 'south_dakota', '/photos/display/stateimg_67875800c51252.77274422.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:38:56', 0),
(33, 17, 'Kentucky', 'kentucky', '/photos/display/stateimg_6787556ff23099.94407250.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:27:59', 0),
(34, 42, 'Tennessee', 'tennessee', '/photos/display/stateimg_678758102ba209.55262356.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:39:12', 0),
(35, 18, 'Louisiana', 'louisiana', '/photos/display/stateimg_6787558681cf43.67347693.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:28:22', 0),
(36, 43, 'Texas', 'texas', '/photos/display/stateimg_6787582174ac20.64792368.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:39:29', 0),
(37, 19, 'Maine', 'maine', '/photos/display/stateimg_678755a0ec0818.49268219.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:28:48', 0),
(38, 44, 'Utah', 'utah', '/photos/display/stateimg_6787584d670e44.96906354.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:40:13', 0),
(39, 20, 'Maryland', 'maryland', '/photos/display/stateimg_678755c980fae8.96505117.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:29:29', 0),
(40, 45, 'Vermont', 'vermont', '/photos/display/stateimg_6787585bd72843.15169919.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:40:27', 0),
(41, 21, 'Massachusetts', 'massachusetts', '/photos/display/img_68071dd7497293.95220806.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:30:07', 0),
(42, 46, 'Virginia', 'virginia', '/photos/display/stateimg_6787586f7af809.52760821.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:40:47', 0),
(43, 22, 'Michigan', 'michigan', '/photos/display/stateimg_678756214287f0.12671161.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:30:57', 0),
(44, 47, 'Washington', 'washington', '/photos/display/stateimg_6787587d2be668.04705236.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:41:01', 0),
(45, 23, 'Minnesota', 'minnesota', '/photos/display/stateimg_6787563c49b791.98130192.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:31:24', 0),
(46, 48, 'West Virginia', 'west_virginia', '/photos/display/stateimg_6787588ed07cd4.91049648.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:41:18', 0),
(47, 24, 'Mississippi', 'mississippi', '/photos/display/stateimg_6787564f568640.15915035.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:31:43', 0),
(48, 49, 'Wisconsin', 'wisconsin', '/photos/display/stateimg_6787589e500ed9.41933259.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:41:34', 0),
(49, 25, 'Missouri', 'missouri', '/photos/display/statebd00560a068ae240ab1fe8bc2f4e50afff823e34.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-02 10:03:03', 0),
(50, 50, 'Wyoming', 'wyoming', '/photos/display/stateimg_678758b06f7f96.06518858.jpg', NULL, NULL, 'state', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:03:03', '2025-01-15 06:41:52', 0),
(51, 2, 'Aruba', 'aruba', '/photos/display/stateimg_67875347c98df6.23117406.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 14:45:01', 0),
(52, 18, 'Panama', 'panama', '/photos/display/stateimg_678757792bd6e1.17136419.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:36:41', 0),
(53, 3, 'Belize', 'belize', '/photos/display/stateimg_67875360aa47f1.24563617.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:19:12', 0),
(54, 19, 'Puerto Rico', 'puerto_rico', '/photos/display/stateimg_678757b7f3f340.20349835.jpg', NULL, NULL, 'island', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-02-21 12:00:59', 0),
(55, 4, 'British Virgin Islands', 'british_virgin_islands', '/photos/display/stateimg_678753784b9ef7.40048477.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:19:36', 0),
(56, 15, 'Martinique', 'martinique', '/photos/display/stateimg_678755b4ba1896.46059991.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:29:08', 0),
(57, 5, 'Canada', 'canada', '/photos/display/img_69809c26e74ac1.97518710.jpg', '/photos/display/mini_img_69809c26e74ac1.97518710.jpg', NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-02 10:04:56', '2026-02-05 13:48:57', 0),
(58, 16, 'Mexico', 'mexico', '/photos/display/stateimg_6787560c340623.24932477.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:30:36', 0),
(59, 7, 'Colombia', 'colombia_south_america', '/photos/display/stateimg_6788d33ce549f3.40620264.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-16 09:37:00', 0),
(60, 21, 'Saint Croix', 'saint_croix', '/photos/display/stateimg_678757de7d41e1.35776399.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:38:22', 0),
(61, 6, 'Cayman Islands', 'cayman_islands', '/photos/display/stateimg_678753b3546549.67802228.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:20:35', 0),
(62, 22, 'Saint John', 'saint_john', '/photos/display/stateimg_67863fdb3adfa7.82547030.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-14 10:44:01', 0),
(63, 8, 'Costa Rica', 'costa_rica', '/photos/display/stateimg_6787542491e5b8.14547444.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:22:28', 0),
(64, 23, 'Saint Lucia', 'saint_lucia', '/photos/display/stateimg_6786401742df82.08639135.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-14 10:44:39', 0),
(65, 9, 'Curaçao', 'curacao', '/photos/display/stateimg_6787544f7c0249.53962316.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:23:11', 0),
(66, 24, 'Saint Martin', 'saint_martin', '/photos/display/stateimg_678640510f1e60.39711523.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-14 10:45:37', 0),
(67, 10, 'Dominican Republic', 'dominican_republic', '/photos/display/stateimg_678754811c8670.24944115.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:24:01', 0),
(68, 25, 'Saint Thomas', 'saint_thomas', '/photos/display/img_67ce7dca260b95.71110342.jpg', NULL, NULL, 'island', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-03-10 05:51:06', 0),
(69, 14, 'Jamaica', 'jamaica', '/photos/display/stateimg_6787553b7990a7.87211828.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:27:07', 0),
(70, 26, 'The Bahamas', 'the_bahamas', '/photos/display/stateimg_6786408c9e6f78.24452677.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-14 10:46:36', 0),
(71, 28, 'Private Islands', 'private_us_islands', '/photos/display/stateimg_678757a774d846.70433868.jpg', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-12-08 06:57:52', 0),
(72, 27, 'Turks and Caicos', 'turks_and_caicos', '/photos/display/stateimg_678758381fd1f4.74270250.jpg', NULL, NULL, 'island', 'Vacation', '1', NULL, NULL, 0, NULL, '2025-01-02 10:04:56', '2025-01-15 06:39:52', 0),
(126, 12, 'Guadeloupe', 'guadeloupe', '/photos/display/stateimg_678f769cc798d8.85127890.jpeg', NULL, '', 'island', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-21 10:27:40', '2025-01-21 10:34:06', 0),
(127, 17, 'Nicaragua', 'nicaragua', '/photos/display/stateimg_678f780d829827.11666934.jpeg', NULL, '', 'island', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-21 10:33:49', '2025-01-21 10:34:15', 0),
(128, 13, 'Honduras', 'honduras', '/photos/display/stateimg_678f784c5a5782.39172449.jpeg', NULL, '', 'island', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-21 10:34:52', '2025-01-21 10:34:52', 0),
(129, 1, 'Anguilla', 'anguilla ', '/photos/display/stateimg_678f786b707a74.15203004.jpeg', NULL, '', 'island', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-21 10:35:23', '2025-01-21 10:35:23', 0),
(130, 11, 'El Salvador', 'el_salvador', '/photos/display/stateimg_678f7886f23fd3.92019844.jpeg', NULL, '', 'island', 'Vacation', '1', 0, NULL, 0, NULL, '2025-01-21 10:35:50', '2025-01-21 10:35:50', 0),
(185, 40, 'Ireland', 'ireland', '/photos/display/img_680619668776d5.35308481.jpg', NULL, NULL, 'state', 'Vacation', '0', 0, 100, 0, 999, '2025-04-21 10:09:42', '2025-04-21 10:09:42', 0),
(186, 0, 'Massachusetts', 'massachusetts', '/photos/display/img_68071dd7497293.95220806.jpg', '/photos/display/mini_img_68071dd7497293.95220806.jpg', NULL, 'state', 'Short Term', '1', 0, NULL, 0, NULL, '2025-04-22 04:26:27', '2026-02-03 06:05:46', 0),
(187, 0, 'Rhode Islands', 'rhode_island', '/photos/display/img_68071e451df268.72462400.jpg', NULL, NULL, 'state', 'Short Term', '0', 0, NULL, 0, NULL, '2025-04-22 04:29:06', '2025-04-22 04:42:45', 0),
(188, 0, 'Connecticut', 'connecticut', '/photos/display/img_68071e70cfe1e3.83611652.jpg', NULL, NULL, 'state', 'Short Term', '0', 0, NULL, 0, NULL, '2025-04-22 04:30:33', '2025-04-22 04:43:28', 0),
(189, 0, 'New jersey', 'new_jersey', '/photos/display/img_68cbd9e7b469c7.99572692.jpg', NULL, NULL, 'state', 'Short Term', '0', 0, NULL, 0, NULL, '2025-04-22 04:34:52', '2025-04-22 04:45:35', 0),
(190, 0, 'Colorado', 'colorado', '/photos/display/img_68071da3ad07e2.91798545.jpg', NULL, NULL, 'state', 'Short Term', '0', 0, NULL, 0, NULL, '2025-04-22 04:36:43', '2025-04-22 04:40:03', 0),
(199, 3, 'Barbados', 'barbados', '/photos/display/img_6833f2e2402ff5.98367975.jpg', NULL, NULL, 'island', 'Vacation', '1', 0, NULL, 0, NULL, '2025-05-26 04:49:38', '2025-05-26 04:56:21', 0),
(217, 0, 'Turkey', 'turkey', '/photos/display/img_693a54ce9db7f7.91793408.jpg', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2025-12-11 05:21:18', '2025-12-11 05:21:18', 0),
(218, 0, 'Greece', 'greece', '/photos/display/img_693a551e787fc3.95997876.jpg', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2025-12-11 05:22:38', '2025-12-11 05:22:38', 0),
(219, 0, 'Italy', 'italy', '/photos/display/img_693a55501c6020.50360585.jpg', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2025-12-11 05:23:28', '2025-12-11 05:23:28', 0),
(220, 0, 'Fiji', 'fiji', '/photos/display/img_693a57f93edfc6.64781828.jpg', NULL, NULL, 'state', 'Vacation', '0', 0, NULL, 0, NULL, '2025-12-11 05:34:49', '2025-12-11 05:34:49', 0),
(221, 0, 'Australia', 'australia', '/photos/display/img_693a582e2da887.49857653.jpg', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2025-12-11 05:35:42', '2025-12-11 05:35:42', 0),
(222, 0, 'New Zealand', 'new_zealand', '/photos/display/img_693a584fc32314.28445676.jpg', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2025-12-11 05:36:15', '2025-12-11 05:36:15', 0),
(234, 0, 'Spain', 'spain', '/photos/display/img_69610bb4e4b094.23453628.webp', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2026-01-09 14:07:48', '2026-01-09 14:07:48', 0),
(273, 1, 'Anguilla', 'anguilla ', NULL, NULL, NULL, 'island', 'Vacation', '1', 0, NULL, 0, NULL, '2026-01-29 16:35:22', '2026-01-29 16:35:22', 0),
(284, 0, 'test', 'test', 'photos/display/img_6980b1f303b2b7.61753192.jpg', NULL, NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2026-02-02 14:17:23', '2026-02-02 14:17:23', 1),
(285, 0, 'test', 'test', '/photos/display/img_6980b2de0b0fa7.94357803.jpg', '/photos/display/mini_img_6980b2de0b0fa7.94357803.jpg', NULL, 'state', 'Vacation', '1', 0, NULL, 0, NULL, '2026-02-02 14:21:18', '2026-02-02 14:21:18', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vacation_states`
--
ALTER TABLE `vacation_states`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vacation_states`
--
ALTER TABLE `vacation_states`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=286;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
