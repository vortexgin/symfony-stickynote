<?php

namespace APIBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Vortexgin\CoreBundle\Entity\Base as BaseEntity;

/**
 * Sticky
 *
 * @ORM\Table(name="sticky")
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks
 */
class Sticky extends BaseEntity
{
    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, precision=0, scale=0, nullable=false, unique=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="position", type="string", length=255, precision=0, scale=0, nullable=true, unique=false)
     */
    private $position;

    /**
     * @var string
     *
     * @ORM\Column(name="message", type="text", precision=0, scale=0, nullable=false, unique=false)
     */
    private $message;


    /**
     * Set name
     *
     * @param string $name
     * @return Sticky
     */
    public function setName($name) {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName() {
        return $this->name;
    }

    /**
     * Set position
     *
     * @param string $position
     * @return Sticky
     */
    public function setPosition($position) {
        $this->position = $position;

        return $this;
    }

    /**
     * Get position
     *
     * @return string
     */
    public function getPosition() {
        return $this->position;
    }

    /**
     * Set message
     *
     * @param string $message
     * @return Sticky
     */
    public function setMessage($message) {
        $this->message = $message;

        return $this;
    }

    /**
     * Get message
     *
     * @return string
     */
    public function getMessage() {
        return $this->message;
    }
}
