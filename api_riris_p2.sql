-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2024 at 06:37 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_riris_p2`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `namatokoh` varchar(255) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `kekuatan` varchar(255) DEFAULT NULL,
  `karakter` varchar(255) DEFAULT NULL,
  `cirifisik` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `namatokoh`, `gender`, `kekuatan`, `karakter`, `cirifisik`) VALUES
(1, 'Elsa', 'Perempuan', 'Membuat(mengendalikan) Es dan Salju', 'Mandiri, bijaksana, tertutup.', 'Rambut pirang keperakan, mata biru.'),
(2, 'Anna', 'Perempuan', 'Tidak memiliki kekuatan khusus.', 'Ceria, pemberani, penuh kasih sayang.', 'Rambut cokelat kemerahan, mata hijau.'),
(3, 'Kristop', 'Laki-laki', 'Ahli mendaki dan berburu.', 'Setia, tangguh, humoris.', 'Berambut pirang gelap, tubuh atletis.'),
(4, 'Sven', 'Jantan', 'rusa kutub', 'Setia, ramah, penolong.', 'Rusa dengan tanduk besar, bulu cokelat.'),
(5, 'Olaf', 'Laki-laki', 'Tidak mencair di suhu hangat.', 'Polos, ceria, humoris.', 'Manusia salju kecil, hidung wortel.'),
(6, 'Hans', 'Laki-laki', 'Tidak memiliki kekuatan khusus.', 'Manipulatif, ambisius, licik.', 'Rambut cokelat kemerahan, mata hijau.'),
(7, 'Grand Pabbie', 'Laki-laki', 'Penyembuhan dan sihir ramalan.', 'Bijaksana, penyayang.', 'Troll tua berbatu, pendek, lumut hijau.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
