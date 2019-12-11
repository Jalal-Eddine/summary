<?php /*******/ ?>
<?php include("fichier.php") ?>

<!-- LES VARIABLES -->
<!--  ************ -->
<?php 
$NomDe = "bakaka";
$number = 55;
$binair = true;
echo "this man is number years old";
echo 'this man is ' . $number . 'years old';
<?php
  $greeting = "Hello";
  $target = "World";
  $phrase = $greeting . " " . $target;
  echo $phrase;
  ?>
  <br />
  <?php
  echo "$phrase Again<br />";
  echo '$phrase Again<br />';
  echo "{$phrase}Again<br />";
  ?>
 ?>
<!-- CONDITIONS -->
<!-- *********** -->
<?php 
==//est égal à
> //Est supérieur à
<//Est inférieur à
>=//Est supérieur ou égal à
<=//Est inférieur ou égal à
!=//Est différent de
AND && //et
OR || // ou
<?php
$autorisation_entrer = true;
if ($autorisation_entrer){ echo "Bienvenue petit nouveau. :o)";}
else{echo "T'as pas le droit d'entrer !";}
?>
<?php
$age = 8;
$langue = "anglais";
if ($age <= 12 AND $langue == "français")
{ echo "Bienvenue sur mon site !";}
elseif ($age <= 12 AND $langue == "anglais")
{echo "Welcome to my website!";}
?>
<!-- we can do this too -->
<?php
$variable = 23;
if ($variable == 23)
{?>
<strong>Bravo !</strong> Vous avez trouvé le nombre mystère !
<?php}
?>
?>
<?php
$note = 10;
switch ($note) // on indique sur quelle variable on travaille
{ 
    case 0: // dans le cas où $note vaut 0
        echo "Tu es vraiment un gros nul !!!";
    break;
    case 5: // dans le cas où $note vaut 5
        echo "Tu es très mauvais";
    break;
    default:
        echo "Désolé, je n'ai pas de message à afficher pour cette note
 ";
}?>
<!-- Les ternaires : des conditions condensées -->
<!-- instead of this -->
<?php -->
$age = 24;
if ($age >= 18)
{$majeur = true;}
else
{$majeur = false;}?>
<!-- we can do this --><?php -->
$age = 24;
$majeur = ($age >= 18) ? true : false;
?>
<!-- // Fuctions -->
<!-- *********** -->
