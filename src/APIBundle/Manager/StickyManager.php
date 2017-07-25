<?php

namespace APIBundle\Manager;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Vortexgin\CoreBundle\Manager\Manager;
use APIBundle\Entity\Sticky;

final class StickyManager extends Manager {
    /**
     *
     * @param ContainerInterface $container
     * @param string $class
     *
     */
    public function __construct(ContainerInterface $container, $class) {
        $container->enterScope('request');
        $container->set('request', new Request(), 'request');
        $this->container = $container;

        $this->listSearchFields = ['id', 'name', 'message'];
        $this->listOrderBy = $this->listSearchFields;

        parent::__construct($container->get('request'), $container->get('doctrine'), $class);
    }

    /**
     *
     * @param APIBundle\Entity\Sticky $object
     *
     * @return boolean
     *
     */
    protected function isSupportedObject($object) {
        if ($object instanceof Sticky)
            return true;

        return false;
    }

    /**
     *
     * @param APIBundle\Entity\Sticky $object
     *
     * @return array
     *          - int id
     *          - string name
     *          - text message
     *
     */
    public function serialize($object) {
        try{
            if(! $this->isSupportedObject($object))
                return false;

            $this->return = array(
                'id'            => $object->getId(),
                'name'          => $object->getName(),
                'position'      => $object->getPosition(),
                'message'       => $object->getMessage(),
                'created_at'    => $object->getCreatedAt()?$object->getCreatedAt()->format('d-m-Y H:i:s'):null,
                'updated_at'    => $object->getUpdatedAt()?$object->getUpdatedAt()->format('d-m-Y H:i:s'):null,
            );

            return $this->return;
        }catch(\Exception $e){
            return $this->return;
        }
    }

    public function get(array $param = array(), $orderBy = 'id', $orderSort = 'DESC', $page = 1, $count = 20){
        list($orderBy, $orderSort, $offset, $limit) = $this->generateDefaultParam($orderBy, $orderSort, $page, $count);

        $sql = $this->generateQuery($param);
        $sql->select('er')
            ->orderBy($orderBy, $orderSort)
            ->setFirstResult($offset)
            ->setMaxResults($limit);

        return $this->getResult($sql);
    }

    public function count(array $param = array()){
        $sql = $this->generateQuery($param);
        $sql->select('count(er.id)');

        return $this->getOneOrNullResult($sql);
    }

    public function insert(array $param = array()) {
        try {
            $obj = $this->createNew();
            $obj->setName($param['name'])
                ->setMessage($param['message'])
                ->setCreatedBy($param['user_log'])
            ;

            if(array_key_exists('position', $param) && !empty($param['position']))
                $obj->setPosition($param['position']);

            $this->manager->persist($obj);
            $this->manager->flush();

            return $obj;
        } catch (\Exception $e) {
            $this->container->get('logger')->error(sprintf($e->getMessage()));
            return false;
        }
    }

    public function update(Sticky $obj, $param){
        try {
            if(array_key_exists('name', $param) && !empty($param['name']))
                $obj->setName($param['name']);
            if(array_key_exists('position', $param) && !empty($param['position']))
                $obj->setPosition($param['position']);
            if(array_key_exists('message', $param) && !empty($param['message']))
                $obj->setMessage($param['message']);

            $obj->setUpdatedBy($param['user_log']);
            $this->manager->persist($obj);
            $this->logModified($obj, $param['user_log']);
            $this->manager->flush();

            return $obj;
        } catch (\Exception $e) {
            $this->container->get('logger')->error(sprintf($e->getMessage()));
            return false;
        }
    }
}
