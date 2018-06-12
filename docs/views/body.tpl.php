<section><div id="article-list">

		<article data-order="0">
      <div class="article" id="intro">
			<h1 class="title"><?php echo $vars['body']['intro']['intro_title']; ?></h1>
			<div class="divider"></div>
			<p class="tagline"><?php echo $vars['body']['intro']['intro_text']; ?></p>
			<a data-order="1" class="scroll next" href="#teaser0"><img src="<?php echo $url ?>res/img/down.png" alt="next article"></a>
		</div>
  </article>


<?php foreach($vars['body']['content'] as $article) { ?>
  <!-- fix this part later -->
    <article data-order='" . $current_article . "' id='teaser" . $article_index . "'>
      <div class='article black align" . $article['image-align'] . "' style='background-image: url(" . $url . "img/article/" . $article['image'] . ");'>
    		if($article['video']) {
    			<img class='go-icon open-article' data-id='#article". $article_index . "' src='" . $url . "img/play-black.png'>
    		} else {
    			<img class='go-icon open-article' data-id='#article". $article_index . "' src='" . $url . "img/plus-black.png'>
    		}
    		<h2 class='title'>" . $article['title_white'] . " <span class='blue'>" . $article['title_blue'] . "</span></h2>
    		<div class='divider'></div>
    		<p class='tagline'>" . $article['tagline'] . "</p>"
    		if($current_article < $total_articles) {
    			<a data-order='" . $next_article . "' class='scroll next' href='#teaser" . $next_article . "'><img src='" . $url . "img/down-black.png' alt='next article'></a>
    		}
	</div>
</article>


<?php endforeach; ?>

</div></section>
