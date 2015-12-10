<?php
// <head> tag here.
// use the global $vars[html] to get variables from.

/* USAGE OF THE TEMPLATE
<html>
    <body>
        Names of my friends:
        <ul>
        <?php foreach ($this->friends as $friend): ?>
            <li><?=$friend?></li>
        <?php endforeach; ?>
        </ul>
    </body>
</html>
*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Choose</title>
	<meta charset="UTF-8">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="description" content="Choose site">
    <meta name="viewport" content="width=device-width">
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
	<!--[if lt IE 9]>
		<script src="<?php echo $url ?>js/vendor/html5shiv.js"></script>
	<![endif]-->
	<link rel="stylesheet" type="text/css" href="<?php echo $url ?>css/vendor/reset.css">
	<link rel="stylesheet" type="text/css" href="<?php echo $url ?>fonts/fonts.css">
	<link rel="stylesheet" type="text/css" href="<?php echo $url ?>css/vendor/royalslider.css">
	<link rel="stylesheet" type="text/css" href="<?php echo $url ?>css/style.css">
	<link rel="apple-touch-icon" href="<?php echo $url ?>img/icon.png"/>
</head>
