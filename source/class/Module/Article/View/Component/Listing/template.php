<?php
echo '<div>';



$newArticleURL = $this->buildURL('Main', 'content/article/edit');

echo '<a href="'.$newArticleURL.'">Nouvel article</a>';

echo '</div>';



foreach ($articles as $article) {

    echo '<article>';
        echo '<div class="title">';
            echo $article->getValue('title');
        echo '</div>';
        echo '<div>';

            $url = $this->buildURL('Main', 'content/article/edit', array($article->getId()));

            echo '<a href="'.$url.'">Editer</a>  ';
            echo '<a href="#" class="delete-trigger" data-article-id="'.$article->getId().'">Supprimer</a>';
        echo '</div>';

    echo '</article>';


}


?>