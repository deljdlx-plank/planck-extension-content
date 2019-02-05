<?php

namespace Planck\Extension\Content\Model\Entity;



use Planck\Extension\User\Model\Entity\User;



class Author extends User
{

    public function getName()
    {
        return $this->getValue('login');
    }


}
