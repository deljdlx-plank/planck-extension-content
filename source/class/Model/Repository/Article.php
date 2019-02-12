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



    public function getByUserId($userId, $limit = 16)
    {
        $query = "
            SELECT * FROM ".$this->getTableName()."
            WHERE
                user_id = :user_id
            ORDER BY creation_date DESC LIMIT :limit            
        ";

        return $this->queryAndGetDataset(
            $query,
            array(
                ':user_id' => $userId,
                ':limit' => $limit
            )
        );
    }

    public function getByCategoryId($categoryId, $limit = 16)
    {
        $query = "
            SELECT * FROM ".$this->getTableName()."
            WHERE
                category_id = :category_id
            ORDER BY creation_date DESC LIMIT :limit            
        ";

        return $this->queryAndGetDataset(
            $query,
            array(
                ':category_id' => $categoryId,
                ':limit' => $limit
            )
        );
    }

    public function getByDate($year=null, $month=null, $date=null, $limit = 16)
    {
        $query = "
            SELECT * FROM ".$this->getTableName()."
            WHERE
                strftime('%Y', creation_date) = :year
                AND strftime('%m', creation_date) = :month
            ORDER BY creation_date DESC LIMIT :limit            
        ";

        return $this->queryAndGetDataset(
           $query,
           array(
               ':year' => $year,
               ':month' => $month,
               ':limit' => $limit
           )
        );
    }


    public function getLasts($limit = 16)
    {
        $query = "
            SELECT * FROM ".$this->getTableName()."
            ORDER BY creation_date DESC LIMIT :limit
        ";

        return $this->queryAndGetDataset($query, array(
            ':limit' => $limit
        ));
    }




}
