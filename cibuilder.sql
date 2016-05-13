-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 13, 2016 at 03:39 AM
-- Server version: 5.5.45-cll-lve
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cibuilder`
--

-- --------------------------------------------------------

--
-- Table structure for table `form_details`
--

CREATE TABLE IF NOT EXISTS `form_details` (
  `fd_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fl_id` bigint(20) NOT NULL,
  `fd_label` varchar(255) DEFAULT NULL,
  `fd_name` varchar(255) DEFAULT NULL,
  `fd_type` varchar(255) DEFAULT NULL,
  `required` text,
  `maxlength` int(11) NOT NULL DEFAULT '0',
  `options` longtext,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `delete_sts` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`fd_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `form_details`
--

INSERT INTO `form_details` (`fd_id`, `fl_id`, `fd_label`, `fd_name`, `fd_type`, `required`, `maxlength`, `options`, `created_date`, `delete_sts`) VALUES
(1, 1, 'Email', 'email', 'email', 'true', 0, '[]', '2016-04-27 11:44:16', 0),
(2, 1, 'Password', 'password', 'password', 'true', 5, '[]', '2016-04-27 11:44:16', 0),
(3, 1, 'Username', 'username', 'text', 'true', 10, '[]', '2016-04-27 11:44:16', 0),
(4, 1, 'TextArea', 'textarea', 'textarea', 'false', 0, '[]', '2016-04-27 11:44:16', 0);

-- --------------------------------------------------------

--
-- Table structure for table `form_lists`
--

CREATE TABLE IF NOT EXISTS `form_lists` (
  `fl_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fl_ref` bigint(20) NOT NULL,
  `fl_name` varchar(255) NOT NULL DEFAULT '',
  `fl_des` longtext,
  `fl_submit` varchar(255) NOT NULL DEFAULT '',
  `fl_url` longtext,
  `fl_created_date` datetime DEFAULT NULL,
  `fl_delete_flag` tinyint(2) NOT NULL DEFAULT '0' COMMENT '0-active.1-deleted',
  PRIMARY KEY (`fl_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `form_lists`
--

INSERT INTO `form_lists` (`fl_id`, `fl_ref`, `fl_name`, `fl_des`, `fl_submit`, `fl_url`, `fl_created_date`, `fl_delete_flag`) VALUES
(1, 20160427044416, 'Test Form', 'Registration form ', 'Send Message', '', '2016-04-27 04:44:16', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
