<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html lang="en">
  <head>
    <title>Debugging</title>
  </head>
  <body>
    <?php 
    /*things to use for debuggin
    -----------------------------*/
      echo $variable;//varible value
      print_r($array);//print readable array
      gettype($variable); //viarble type
      var_dump($variable);//variable type and value
      get_defined_vars(); // array of defined variables
      debug_backtrace(); //show backtrace
    ?>
    <?php
      $number = 99;
      $string = "Bug?";
      $array = array(1 => "Homepage", 2 => "About Us", 3 => "Services");
      
      var_dump($number);
      var_dump($string);
      var_dump($array);
    
    ?>
    <br />
    <pre>
    <?php
      // print_r(get_defined_vars());
    ?>
    </pre>
    <br />
    <?php

      function say_hello_to($word) {
        echo "Hello {$word}!<br />";
        var_dump(debug_backtrace());
      }

      say_hello_to('Everyone');
    ?>
  </body>
</html>
