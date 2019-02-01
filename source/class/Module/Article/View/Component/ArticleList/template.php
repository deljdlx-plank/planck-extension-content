<?php
echo '<div>';



$newArticleURL = $this->buildURL('Main', 'content/article/edit');

echo '<a href="'.$newArticleURL.'">Nouvel article</a>';

echo '</div>';



foreach ($articles as $article) {

    echo '<div>';
        echo '<div>';
            echo $article->getValue('title');
        echo '</div>';
        echo '<div>';

            $url = $this->buildURL('Main', 'content/article/edit', array($article->getId()));
            echo '<a href="'.$url.'">Editer</a>';
        echo '</div>';

    echo '</div>';


}


?>