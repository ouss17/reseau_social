<?php

namespace App\Entity;

use App\Repository\LikeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LikeRepository::class)]
#[ORM\Table(name: '`like`')]
class Like
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'likes')]
    #[ORM\JoinColumn(nullable: false)]
    private $Username;

    #[ORM\ManyToOne(targetEntity: Post::class, inversedBy: 'likes')]
    private $IdPost;

    #[ORM\ManyToOne(targetEntity: Comment::class, inversedBy: 'likes')]
    private $IdComment;


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

    public function getIdPost(): ?Post
    {
        return $this->IdPost;
    }

    public function setIdPost(?Post $IdPost): self
    {
        $this->IdPost = $IdPost;

        return $this;
    }

    public function getIdComment(): ?Comment
    {
        return $this->IdComment;
    }

    public function setIdComment(?Comment $IdComment): self
    {
        $this->IdComment = $IdComment;

        return $this;
    }


}
