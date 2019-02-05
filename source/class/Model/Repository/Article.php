<?php

namespace Planck\Extension\Content\Model\Repository;




use Planck\Model\Repository;

class Article extends Repository
{
    protected static $tableName = 'article';




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
