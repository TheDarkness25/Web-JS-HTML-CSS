<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/php01.css">
    <title>PHP01</title>
</head>

<body>
    <h1 class="h1">É um Triângulo???</h1>
    <div class="form">
        <form method="post" action="#">
            <label class="l1">Primeiro lado: </label>
            <input class="i1" type="text" name="V1" placeholder="Lado 1" /><br />

            <label class="l2">Segundo lado: </label>
            <input class="i2" type="text" name="V2" placeholder="Lado 2" /><br />

            <label class="l3">Terceiro lado: </label>
            <input class="i3" type="text" name="V3" placeholder="Lado 3" /><br />
            <input class="btn" type="submit" value="Verificar" />
        </form>
        <?php
        $a = $_POST["V1"];
        $b = $_POST["V2"];
        $c = $_POST["V3"];
        if ($a < $b + $c && $b < $a + $c && $c < $b + $a) {
            if ($a == $b and $b == $c) {
                echo "<br>Triângulo Equilatero!";
            } elseif ($a == $b || $a == $c || $b == $c) {
                echo "<br>Triângulo Isósceles!";
            } else {
                echo "<br>Triângulo Escaleno!";
            }
        } else {
            echo "<br>Não é um triângulo!";
        }
        ?>
        <footer class="fim">
            &copy; Rafael Venticinque
        </footer>
    </div>
</body>

</html>