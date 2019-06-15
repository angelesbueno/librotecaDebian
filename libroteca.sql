-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 05, 2019 at 10:46 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `libroteca`
--

-- --------------------------------------------------------

--
-- Table structure for table `autor`
--

CREATE TABLE `autor` (
  `idAutor` int(11) NOT NULL,
  `autor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `autor`
--

INSERT INTO `autor` (`idAutor`, `autor`) VALUES
(1, 'J.K. Rowling'),
(2, 'Carolina Andujar'),
(3, 'Mark Dickinson'),
(4, 'William M. Cullen'),
(5, 'Christen Jul'),
(6, 'Brigitte Melzer'),
(8, 'Friedrich Meister'),
(9, 'Åsa Rosén'),
(10, 'K. M. Mcfarland'),
(12, 'Pío Baroja'),
(13, 'Erin Kelly Entrada'),
(14, 'Towanda Rebels'),
(15, 'Autor no disponible'),
(16, 'Ken Follett'),
(24, 'Rafael Abalos'),
(25, 'J. K. Rowling');

-- --------------------------------------------------------

--
-- Table structure for table `editorial`
--

CREATE TABLE `editorial` (
  `idEditorial` int(11) NOT NULL,
  `editorial` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `editorial`
--

INSERT INTO `editorial` (`idEditorial`, `editorial`) VALUES
(1, 'hockebooks'),
(2, 'SEVERUS Verlag'),
(3, 'Rabén & Sjögren'),
(4, 'Independently Published'),
(6, 'Editorial no disponible'),
(7, 'Océano Gran Travesía'),
(8, 'AGUILAR'),
(9, 'Ediciones Colihue SRL'),
(10, 'PLAZA & JANES'),
(18, 'Montena'),
(19, 'Pottermore Publishing'),
(20, 'Penguin Random House Grupo Editorial España');

-- --------------------------------------------------------

--
-- Table structure for table `favorito`
--

CREATE TABLE `favorito` (
  `idFavorito` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `favorito`
--

INSERT INTO `favorito` (`idFavorito`, `id`) VALUES
(5, 3),
(1, 8),
(2, 14),
(3, 15),
(6, 17);

-- --------------------------------------------------------

--
-- Table structure for table `leido`
--

CREATE TABLE `leido` (
  `id` int(11) NOT NULL,
  `idLibro` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `observaciones` varchar(500) DEFAULT NULL,
  `nota` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `leido`
--

INSERT INTO `leido` (`id`, `idLibro`, `idUsuario`, `observaciones`, `nota`) VALUES
(3, 3, 2, NULL, NULL),
(4, 4, 2, NULL, NULL),
(5, 5, 2, NULL, NULL),
(6, 6, 2, NULL, NULL),
(8, 3, 1, 'Me encanta!!!', 5),
(14, 4, 1, NULL, NULL),
(15, 5, 1, NULL, NULL),
(16, 7, 2, NULL, NULL),
(17, 9, 2, 'Tonaaaa', 5),
(18, 2, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `libro`
--

CREATE TABLE `libro` (
  `idLibro` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `idAutor` int(11) NOT NULL,
  `idEditorial` int(11) NOT NULL,
  `sinopsis` varchar(5000) NOT NULL,
  `portada` varchar(1000) NOT NULL,
  `idGB` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `libro`
--

INSERT INTO `libro` (`idLibro`, `titulo`, `idAutor`, `idEditorial`, `sinopsis`, `portada`, `idGB`) VALUES
(1, 'Grimpow, El Camino Invisible', 24, 18, 'Presents a centuries-long journey that has driven sane men crazy, turned peaceful men violent, and made strong men powerless.', 'http://books.google.com/books/content?id=-Q6CGgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', '-Q6CGgAACAAJ'),
(2, 'Harry Potter y la Orden del Fénix', 1, 19, 'Las vacaciones de verano aún no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extraño está sucediendo en Hogwarts. No bien empieza el nuevo curso, sus temores se vuelven realidad: el Ministerio de Magia ha iniciado una campaña de desprestigio contra él y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar sus movimientos. Y por si fuera poco, Harry sospecha que Voldemort es capaz de adivinar sus pensamientos con el fin de apoderarse de un objeto secreto que le permitiría recuperar su poder destructivo.', 'http://books.google.com/books/content?id=uUOBPgXQtvUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'uUOBPgXQtvUC'),
(3, 'Harry Potter y las reliquias de la muerte', 25, 6, 'La fecha crucial se acerca. Cuando cumpla diecisiete años, Harry perderá el encantamiento protector que lo mantiene a salvo. El anunciado enfrentamiento a muerte con lord Voldemort es inminente, y la casi imposible misión de encontrar y destruir los restantes Horrocruxes más urgente que nunca. Ha llegado la hora final, el momento de tomar las decisiones más difíciles. Harry debe abandonar la calidez y seguridad de La Madriguera para seguir sin miedo ni vacilaciones el inexorable sendero trazado para él. Consciente de lo mucho que está en juego, sólo dentro de sí mismo encontrará la fuerza necesaria que lo impulse en la vertiginosa carrera para enfrentarse con su destino.', 'http://books.google.com/books/content?id=V-fdPQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'V-fdPQAACAAJ'),
(4, 'Harry Potter y el misterio del príncipe', 1, 19, 'En medio de graves acontecimientos que asolan el país, Harry inicia su sexto curso en Hogwarts. El equipo de quidditch, los exámenes y las chicas lo mantienen ocupado, pero la tranquilidad dura poco. A pesar de los férreos controles de seguridad, dos alumnos son brutalmente atacados. Dumbledore sabe que, tal como se anunciaba en la Profecía, Harry y Voldemort han de enfrentarse a muerte. Así pues, para intentar debilitar al enemigo, el anciano director y el joven mago emprenderán juntos un peligroso viaje con la ayuda de un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar Príncipe Mestizo.', 'http://books.google.com/books/content?id=uZDYlfDVYmEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'uZDYlfDVYmEC'),
(5, 'Harry Potter y la cámara secreta', 1, 19, 'Mientras Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia y Hechicería, un elfo aparece en su habitación y le advierte de que una amenaza mortal se cierne sobre la escuela. Harry no se lo piensa dos veces y, acompañado de Ron, se dirige a Hogwarts en un coche volador. Allí, Harry oye extraños susurros en los pasillos desiertos y, de pronto... los ataques comienzan. La siniestra predicción del elfo parece hacerse realidad.', 'http://books.google.com/books/content?id=zl13g5uRM4EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'zl13g5uRM4EC'),
(6, 'Harry Potter y el prisionero de Azkaban', 1, 19, 'De la prisión de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie que fue cómplice de lord Voldemort y que, dicen los rumores, quiere vengarse de Harry por haber destruido a su maestro. Por si esto fuera poco, entran en acción los dementores, unos seres abominables capaces de robarles la felicidad a los magos y de eliminar todo recuerdo hermoso de aquellos que se atreven a acercárseles. El desafío es enorme, pero Harry, Ron y Hermione son capaces de enfrentarse a todo esto y mucho más.', 'http://books.google.com/books/content?id=2EaOj7-ozKgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', '2EaOj7-ozKgC'),
(7, 'Harry Potter y la piedra filosofal', 1, 19, 'Harry vive con sus horribles tíos y el insoportable primo Dudley, hasta que su ingreso en el Colegio Hogwarts de Magia y Hechicería cambia su vida para siempre. Allí aprenderá trucos y encantamientos fabulosos, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Y, sobre todo, conocerá los secretos que lo ayudarán a cumplir con su destino.', 'http://books.google.com/books/content?id=2zgRDXFWkm8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', '2zgRDXFWkm8C'),
(8, 'Hola, Universo', 13, 7, 'Uno: Virgil Salinas, chico tímido pero amigable que se siente fuera de lugar en el seno de una familia adicta a los deportes. Dos: Valencia Somerset, inteligente y valerosa, aunque un poco secretamente solitaria, ama todo lo que tiene que ver con la naturaleza, y quien, por cierto, padece sordera. Tres: Kaori Tanaka, autoproclamada psíquica a quien persigue siempre su pequeña hermana. Y cuatro: Chet Bullens, joven ordinario cuyo único deseo es poder ignorar a todos esos raritos que le rodean, y así poder dedicarse a lo suyo: el baloncesto. Un día (en solo uno), esas cuatro vidas habrán de entrelazarse para siempre en una muy poco predecible hermandad del alma.', 'http://books.google.com/books/content?id=ssiLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'ssiLDwAAQBAJ'),
(9, 'Los pilares de la Tierra (Saga Los pilares de la Tierra 1)', 16, 20, '<p><b><i>Los pilares de la Tierra</i> es la obra maestra de Ken Follett y constituye una excepcional evocación de una época de violentas pasiones.</b></p> <p></p> <p><b>Esta edición de </b><i><b>Los pilares de la Tierra</b></i><b> incluye un prólogo del autor con motivo del 25.o aniversario de la publicación.</b></p> <p>El gran maestro de la narrativa de acción y suspense nos transporta a la Edad Media, a un fascinante mundo de reyes, damas, caballeros, pugnas feudales, castillos y ciudades amuralladas. El amor y la muerte se entrecruzan vibrantemente en este magistral tapiz cuyo centro es la construcción de una catedral gótica. La historia se inicia con el ahorcamiento público de un inocente y finaliza con la humillación de un rey.</p> <p><b>Reseñas:</b><br>«Fantástico desde todos los puntos de vista.»<br><i>El Mundo</i></p> <p>«<i>Los pilares de la Tierra</i> fue un hito en España, donde todavía sigue siendo el libro más leído de la historia según la Federación del Gremio de Editores.»<br><i>ABC</i></p> <p>«Alta política y bajas pasiones (y viceversa) conforman un folletín de grandes dimensiones que confirman a Follett como relojero mayor del reino del bestseller.»<br><i>Qué leer</i></p> <p>«Maravilloso... Te atrapará, fascinará y envolverá.»<br><i>Chicago Tribune</i></p> <p>«<i>Los pilares de la Tierra</i> hizo de Ken Follet uno de los autores más queridos de nuestro país.»<br><i>ABC Sevilla</i></p> <p>«Ken Follett sabe cómo tejer una historia fascinante, con personajes complejos, que todo actor sueña con interpretar.»<br>Donald Sutherland</p> <p>«Me encanta <i>Los pilares de la Tierra</i>, lo recuerdo con mucho cariño [...] es uno de aquellos títulos que se quedan grabados...»<br>Ildefonso Falcones</p> <p>«En <i>Los pilares de la Tierra</i>, Ken Follett nos presenta a unos personajes que consiguen que la historia cobre vida.»<br>Ridley Scott</p> <p><b>Los lectores opinan...</b><br>«Mi libro favorito.»<br>Ana María</p> <p>«Lo he leído tres veces, es fascinante.»<br>Dolores</p> <p>«Un libro que, sin duda, está entre mis favoritos.»<br>Alexander</p> <p>«¡Gran obra!»<br>Andrés</p> <p>«Una historia fantástica, inolvidable.»<br>Faby</p> <p><b>Reseñas:</b><br>«Fantástico desde todos los puntos de vista.»<br><i>El Mundo</i></p> <p>«<i>Los pilares de la Tierra</i> fue un hito en España, donde todavía sigue siendo el libro más leído de la historia según la Federación del Gremio de Editores.»<br><i>ABC</i></p> <p>«Alta política y bajas pasiones (y viceversa) conforman un folletín de grandes dimensiones que confirman a Follett como relojero mayor del reino del <i>bestseller</i>.»<br><i>Qué leer</i></p> <p>«Maravilloso... Te atrapará, fascinará y envolverá.»<br><i>Chicago Tribune</i></p> <p>«<i>Los pilares de la Tierra</i> hizo de Ken Follet uno de los autores más queridos de nuestro país.»<br><i>ABC Sevilla</i></p> <p>«Ken Follett sabe cómo tejer una historia fascinante, con personajes complejos, que todo actor sueña con interpretar.»<br>Donald Sutherland</p> <p>«Me encanta <i>Los pilares de la Tierra</i>, lo recuerdo con mucho cariño [...] es uno de aquellos títulos que se quedan grabados...»<br>Ildefonso Falcones</p> <p>«En <i>Los pilares de la Tierra</i>, Ken Follett nos presenta a unos personajes que consiguen que la historia cobre vida.»<br>Ridley Scott</p> <p><b>Los lectores opinan...</b><br>«Mi libro favorito.»<br>Ana María</p> <p>«Lo he leído tres veces, es fascinante.»<br>Dolores</p> <p>«Un libro que, sin duda, está entre mis favoritos.»<br>Alexander</p> <p>«¡Gran obra!»<br>Andrés</p> <p>«Una historia fantástica, inolvidable.»<br>Faby</p>', 'http://books.google.com/books/content?id=mKoInmOU130C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72mEc5MR-V5_B0V7exYCcxgiP2lpeORzl_rQT8fqt_7Nuhdyvyvva95KSwdal4YLc0Lurh3GMqD5CTQK6fzFpidHabV6lp1Sez5fu_KY1k-1GjX-3zr-BWVEXcACUKd7MAcXZ0q&source=gbs_api', 'mKoInmOU130C');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `rol` varchar(5) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `username`, `password`, `nombre`, `apellidos`, `email`, `rol`) VALUES
(1, 'angytambien', 'ecad7e4788f8b9ace0fa3e04bd3a37a9', 'Ángeles', 'Bueno Aguilar', 'angytambien@gmail.com', 'admin'),
(2, 'soretus', '9ec87608a23b6ecb6083b89dbe59a792', 'Soraya', 'Cubino Hernández', 'sorus@mielina.es', 'user'),
(3, 'pepus', '52324e7934d933c31f7aecf35ce4b9f8', 'Pepe', 'Pérez Gil', 'pepe@email.es', 'user'),
(4, 'jacinta', '7616fe08763bd1d6a533b8287117e2d5', 'Jacinta', 'Humanes Poveda', 'jacinta@bubbles.es', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`idAutor`);

--
-- Indexes for table `editorial`
--
ALTER TABLE `editorial`
  ADD PRIMARY KEY (`idEditorial`);

--
-- Indexes for table `favorito`
--
ALTER TABLE `favorito`
  ADD PRIMARY KEY (`idFavorito`),
  ADD KEY `fk_favorito_leido` (`id`);

--
-- Indexes for table `leido`
--
ALTER TABLE `leido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_leido_usuario` (`idUsuario`),
  ADD KEY `fk_leido_libro` (`idLibro`) USING BTREE;

--
-- Indexes for table `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`idLibro`),
  ADD KEY `fk_libro_autor` (`idAutor`),
  ADD KEY `fk_libro_editorial` (`idEditorial`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `usuario` (`username`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autor`
--
ALTER TABLE `autor`
  MODIFY `idAutor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `editorial`
--
ALTER TABLE `editorial`
  MODIFY `idEditorial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `favorito`
--
ALTER TABLE `favorito`
  MODIFY `idFavorito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `leido`
--
ALTER TABLE `leido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `libro`
--
ALTER TABLE `libro`
  MODIFY `idLibro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favorito`
--
ALTER TABLE `favorito`
  ADD CONSTRAINT `fk_favorito_leido` FOREIGN KEY (`id`) REFERENCES `leido` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `leido`
--
ALTER TABLE `leido`
  ADD CONSTRAINT `FK_leido_libro` FOREIGN KEY (`idLibro`) REFERENCES `libro` (`idLibro`),
  ADD CONSTRAINT `fk_leido_usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Constraints for table `libro`
--
ALTER TABLE `libro`
  ADD CONSTRAINT `fk_libro_autor` FOREIGN KEY (`idAutor`) REFERENCES `autor` (`idAutor`),
  ADD CONSTRAINT `fk_libro_editorial` FOREIGN KEY (`idEditorial`) REFERENCES `editorial` (`idEditorial`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
