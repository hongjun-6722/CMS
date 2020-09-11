/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 8.0.11 : Database - rms
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`rms` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `rms`;

/*Table structure for table `roster` */

DROP TABLE IF EXISTS `roster`;

CREATE TABLE `roster` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` char(8) DEFAULT NULL,
  `age` int(7) DEFAULT NULL,
  `qq` char(18) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

/*Data for the table `roster` */

insert  into `roster`(`id`,`name`,`age`,`qq`) values (1,'2',4,NULL),(27,'',0,''),(28,'4',6,'7'),(30,'6',44,'64'),(31,'67',76,'54646@'),(32,'67',76,'54646'),(33,'22',22,'qqq'),(34,'11',22,'11'),(35,'',0,''),(36,'as',3,'ad@'),(37,'da',33,'qw'),(38,'sa',33,'qd'),(39,'s',3,'@'),(40,'dd',3,'@'),(41,'44',75,'7');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `user` char(8) DEFAULT NULL,
  `pwd` char(8) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`user`,`pwd`) values (1,'123','123');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
