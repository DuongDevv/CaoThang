<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="bai4bancovua.css">
</head>
<body>
    <div class="chessboard">
    <?php
     for ($row = 0; $row < 8; $row++) {
        for ($col = 0; $col < 8; $col++) {
            $isBlack = ($row + $col) % 2 == 1;
            $colorClass = $isBlack ? 'black' : 'white';
            echo "<div class='square $colorClass'></div>";
        }
    }
    ?>
    </div>
</body>
</html>