<?php

namespace Planck\Extension\Content\Model\Repository;




use Phi\Model\Entity;
use Planck\Helper\StringUtil;
use Planck\Model\Repository;

class Article extends Repository
{
    protected static $tableName = 'content_article';



    public function store(Entity $article, $dryRun = false)
    {
        if(!$article->getValue('slug')) {

            $article->setValue(
                'slug',
                StringUtil::slugify(
                    $article->getValue('title')
                )
            );
        }
        return parent::store($article, $dryRun);
    }


    public function getLasts($number = 16)
    {
        $query = "
            SELECT * FROM ".$this->getTableName()."
            ORDER BY creation_date DESC LIMIT :limit
        ";

        return $this->queryAndGetDataset($query, array(
            ':limit' => $number
        ));
    }




}
