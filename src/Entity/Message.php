<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
class Message
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'messages')]
    #[ORM\JoinColumn(nullable: false)]
    private $Username;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'messagesReceive')]
    #[ORM\JoinColumn(nullable: false)]
    private $UserReceiver;

    #[ORM\Column(type: 'text')]
    private $Content;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?User
    {
        return $this->Username;
    }

    public function setUsername(?User $Username): self
    {
        $this->Username = $Username;

        return $this;
    }

    public function getUserReceiver(): ?User
    {
        return $this->UserReceiver;
    }

    public function setUserReceiver(?User $UserReceiver): self
    {
        $this->UserReceiver = $UserReceiver;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->Content;
    }

    public function setContent(string $Content): self
    {
        $this->Content = $Content;

        return $this;
    }
}
