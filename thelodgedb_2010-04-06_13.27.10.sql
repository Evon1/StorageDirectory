-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.1.40


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema thelodge
--

CREATE DATABASE IF NOT EXISTS thelodge;
USE thelodge;
CREATE TABLE  `thelodge`.`forms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `controller` varchar(255) DEFAULT NULL,
  `action` varchar(255) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `scope` varchar(255) DEFAULT NULL,
  `target_id` int(11) DEFAULT NULL,
  `send_email` tinyint(1) DEFAULT NULL,
  `recipient` varchar(255) DEFAULT NULL,
  `use_reverse_captcha` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
INSERT INTO `thelodge`.`forms` (`id`,`name`,`description`,`controller`,`action`,`enabled`,`created_at`,`updated_at`,`scope`,`target_id`,`send_email`,`recipient`,`use_reverse_captcha`) VALUES 
 (1,'Share your thoughts','The post comment form','comments','create',1,'2009-12-29 11:18:50','2009-12-29 22:33:44','post',NULL,NULL,NULL,NULL),
 (2,'Contact Form','Sitewide contact form','comments','create',1,'2009-12-29 23:28:05','2010-03-17 05:17:18','',NULL,1,'thelodgeboca@yahoo.com',1),
 (6,'Post Tag Form','Create tags on a post','tags','create',1,'2010-01-02 22:23:52','2010-01-02 22:23:52','post',NULL,NULL,NULL,NULL);



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
