-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: glb_blog
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `instructor`
--

DROP TABLE IF EXISTS `instructor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instructor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `img` varchar(1500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instructor`
--

LOCK TABLES `instructor` WRITE;
/*!40000 ALTER TABLE `instructor` DISABLE KEYS */;
INSERT INTO `instructor` VALUES (1,'Elif BENGÜ, Assistant Professor','elif.bengu@agu.edu.tr','https://yocad.org.tr/wp-content/uploads/2022/11/elif-bengu.jpg'),(2,'Kevser KAHRAMAN, Associate Professor, GLB 2xx Coordinator','kevser.kahraman@agu.edu.tr','http://www.agu.edu.tr/userfiles//Kevser_Kahraman/Kevser_Kahraman.png'),(3,'Çağlar KURÇ, Assistant Professor, GLB AGU Ways Coordinator','caglar.kurc@agu.edu.tr','https://avesis.agu.edu.tr/user/image/100985'),(4,'Sinan AKYÜZ, Lecturer, GLB 2xx Coordinator','sinan.akyuz@agu.edu.tr','http://www.agu.edu.tr/userfiles//Fuarlar/GSES/Dr.%20sinan%20akyu%CC%88z-o%CC%88g%CC%86retim%20-go%CC%88revlisi-.jpg'),(5,'Şebnem SOYLU, Research Assistant','sebnem.soylu@agu.edu.tr','http://www.agu.edu.tr/userfiles//CELT/s%CC%A7ebnem_resim.jpeg');
/*!40000 ALTER TABLE `instructor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `desc` varchar(1200) NOT NULL,
  `img` varchar(255) NOT NULL,
  `datetime` datetime NOT NULL,
  `userid` int NOT NULL,
  `cat` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  KEY `posts_index` (`cat`),
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (2,'sdasdsa','dsdads','https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','2023-04-19 15:30:45',4,'goal-1'),(3,'dasdas','asddsa','https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','2023-04-19 15:30:45',4,'goal-12'),(4,'dasda','dasdas','https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','2023-04-19 15:30:45',3,'goal-10'),(8,'AAA','<p>AAA</p>','1681942494804Best_Fitness_Scores_over_Generation.png','2023-04-20 01:14:54',3,'goal-5'),(9,'RRRR','<p>RRRRRR</p>','1681950485556LSTM-Sentiment-Model.png','2023-04-20 03:28:05',3,'goal-1,goal-2,goal-3,goal-4,goal-5,goal-6,goal-7,goal-8,goal-9,goal-10,goal-11,goal-12,goal-13,goal-14,goal-15,goal-16,goal-17'),(10,'RRRsdd','<p>sddasdsds</p>','1681950515192LSTM-confusion_matrix.png','2023-04-20 03:28:35',3,'goal-3'),(12,'ERER','<p>ERER</p>','1682009975885Best_Fitness_Scores_over_Generation.png','2023-04-20 19:59:35',3,'goal-8'),(13,'ERERwer','<p>eweweqw</p>','1682010392697LSTM-Sentiment-Model.png','2023-04-20 20:06:32',3,'goal-1,goal-2'),(15,'RRRRR','<p>RRRRRR</p>','1682015054546Best_Fitness_Scores_over_Generation.png','2023-04-20 21:24:14',3,'goal-1,goal-2,goal-3,goal-4,goal-5,goal-6,goal-7,goal-8,goal-9,goal-10,goal-11,goal-12,goal-13,goal-14,goal-15,goal-16,goal-17'),(16,'Yaga','<p>Yaga</p>','1682017343519LSTM-Sentiment-Model.png','2023-04-20 22:02:23',3,'goal-1,goal-2,goal-3,goal-4,goal-5,goal-6,goal-7,goal-8,goal-9,goal-10,goal-11,goal-12,goal-13,goal-14,goal-15,goal-16,goal-17'),(18,'ewrrerew','<p>reerrewer</p>','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFfYUo6_xSjePzsoJIyB8r8Fe5n6lY5eGvNbTuG_J&s','2023-04-22 18:30:13',3,'goal-1'),(19,'ewrwerwree','<p>ewwwr	ew	dew</p>','../../img/logo.png','2023-04-22 18:33:43',3,'goal-6'),(20,'dsdsad','<p>sdadsasdsd</p>','https://seeklogo.com/images/A/abdullah-gul-universitesi-logo-50B4B48AD4-seeklogo.com.png','2023-04-22 18:35:17',3,'goal-5'),(22,'FRRRErrf','<p>FRRRErrf</p>','','2023-04-22 19:08:34',3,'goal-5');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sdg`
--

DROP TABLE IF EXISTS `sdg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sdg` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img` varchar(1500) NOT NULL,
  `title` varchar(100) NOT NULL,
  `desc` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sdg`
--

LOCK TABLES `sdg` WRITE;
/*!40000 ALTER TABLE `sdg` DISABLE KEYS */;
INSERT INTO `sdg` VALUES (1,'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-01-1024x1024.png','No Poverty','Bu öğenin açıklaması'),(2,'https://picsum.photos/400/300','Zero Hunger','Bu öğenin açıklaması'),(3,'https://picsum.photos/400/300','Good Health and Well-Being','Bu öğenin açıklaması'),(4,'https://picsum.photos/400/300','Quality Education','Bu öğenin açıklaması'),(5,'https://picsum.photos/400/300','Gender Equality','Bu öğenin açıklaması'),(6,'https://picsum.photos/400/300','Clean Water and Sanitation','Bu öğenin açıklaması'),(7,'https://picsum.photos/400/300','Affordable and Clean Energy','Bu öğenin açıklaması'),(8,'https://picsum.photos/400/300','Decent Work and Economic Growth','Bu öğenin açıklaması'),(9,'https://picsum.photos/400/300','Industry, Innovation and Infrastructure','Bu öğenin açıklaması'),(10,'https://picsum.photos/400/300','Reduced Inequalities','Bu öğenin açıklaması'),(11,'https://picsum.photos/400/300','Sustainable Cities and Communities','Bu öğenin açıklaması'),(12,'https://picsum.photos/400/300','Responsible Consumption and Production','Bu öğenin açıklaması'),(13,'https://picsum.photos/400/300','Climate Action','Bu öğenin açıklaması'),(14,'https://picsum.photos/400/300','Life Below Water','Bu öğenin açıklaması'),(15,'https://picsum.photos/400/300','Life On Land','Bu öğenin açıklaması'),(16,'https://picsum.photos/400/300','Peace,Justice and Strong Institutions','Bu öğenin açıklaması'),(17,'https://picsum.photos/400/300','Partnerships for the Goals','Bu öğenin açıklaması');
/*!40000 ALTER TABLE `sdg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teachers_userid` (`userid`),
  CONSTRAINT `teachers_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,3),(2,4),(3,7);
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_index` (`username`,`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'Yaga','Yaga','$2a$10$JL48bLAR3yY.pbsYtkc9mOK0rQKngKYtIpney.VSEggHaVUUHX4Pa',NULL),(4,'Ali','Ali','$2a$10$9SyJrVhlbdl.uaTmbzyAOu4z3qCFJFhO9jvsIaDKjoMt5XGA7z782','https://cdn-icons-png.flaticon.com/512/149/149071.png'),(5,'Veli','Veli','$2a$10$.NBbk.NxpGbcgfzcRKV9.O5dvk0eI2rHsMkeDWBWwMi9efqqy/tD6',NULL),(6,'as','as','$2a$10$MIJgM82aU2mpRrNKBigLO.i1EkL7ACMUZqXN8dgHHqAm/G7LrUvOS',NULL),(7,'Yaga987','Yaga987','$2a$10$zh5vjSdTJyxdS31i47c/semY85k/qbtbtTdrT4cZ4cywV.PszQNZu',NULL),(8,'GHa','GHa','$2a$10$kVI8J3Bx9/09afhVO3ddu.FsvExqsbFeEiVxiFGpljKoif4Qp4z3m',NULL),(9,'AAAAA','AAAAA','$2a$10$p1cle.yqnbO.osCAut6.6O8gW0aM.NrzP1Dvkpl3ZVoF0EQLodTji',NULL),(10,'f121','f122','$2a$10$S2rJvvdBx95SmRnR0UDnT.ybCT0kGty6RYwjopTa3CKpp9gCyoMDe',NULL),(11,'213','213','$2a$10$01O58SzJHOecKJq0PwaLreZtP94ChWOehmshm.HKr4./sKEJJtLlm',NULL),(12,'2133','2133','$2a$10$1ihFqMb.0SDFPPRK2/0yCOfXbY7sgYWb5uWP3C8bnYD9Vxi.l6hO.',NULL),(13,'1324','1324','$2a$10$vnGO2iI83ShWIQ1jaEgbKukvVzlU.54vbh0aHuQn8YOUgbudUtWyG',NULL),(14,'EEEE','EEEE','$2a$10$giNUUiM2EHijC.VVF4lVFOld9pz/shOW7Ylwf5CxofgWSOw5tURMe',NULL),(15,'TTT','TTT','$2a$10$D1uTtEfAovU.n6s3jGYM5.cfBRJhCDRiHVoQxGiCO3k8nWNdVwo8O',NULL),(16,'EEEEE','EEEEE','$2a$10$e4RvenxwbpWDBM0.v0KsnOWS6ygMCytmfV4oAo/M4iuMQIOPnQmeW',NULL),(17,'rrr','rrr','$2a$10$8soZfsvxE7tN5pPHvYubgORRZWcoVXEUzOJcsl.a54WI/SZufFMxe',NULL),(18,'FFF','FFF','$2a$10$3Vi8yyXJGiCL6qaxEPHN8udAaOQ9OHzyuCjQil9VX5MVHmckSQAnm',NULL),(19,'reeer','reeer','$2a$10$CqindIiufvQRL0sUDmztduHomPuU.0dpqRXYcsh85U6PVP6CxYcdW',NULL),(20,'Yaga1','Yaga1','$2a$10$LNRjgyvte8rVjm5EEaIKGujJZaiIlcCxCXLcdcVrbyYMzYmkdMmcG',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-22 20:20:50
