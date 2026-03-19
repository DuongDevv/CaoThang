<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $arr = array("Tokyo", "Mexico City", "New York City", "Mumbai", "Seoul", "Shanghai", "Lagos", "Buenos Aires", "Cairo", "London");
    for ($i = 0; $i < count($arr); $i++){
        echo" ".$arr[$i].", ";
    }
    sort(array: $arr);
    echo "<ul>";
    foreach ($arr as $k => $v){
        echo "<li>".$v."</li>";
    }
    echo "</ul>";
    echo "sau khi them va sap xep:";
    array_push($arr,"Los Angeles", "Calcutta", "Osaka", "Beijing");
   sort(array: $arr);
    echo "<ul>";
    foreach ($arr as $k => $v){
        echo "<li>".$v."</li>";
    }
    echo "</ul>";
    ?>
</body>
</html>