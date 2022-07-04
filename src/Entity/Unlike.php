<?php

namespace App\Entity;

use App\Repository\UnlikeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UnlikeRepository::class)]
class Unlike
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'unlikes')]
    #[ORM\JoinColumn(nullable: false)]
    private $Username;

    #[ORM\ManyToOne(targetEntity: Post::class, inversedBy: 'unlikes')]
    private $IdPost;

    #[ORM\ManyToOne(targetEntity: Comment::class, inversedBy: 'unlikes')]
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
