<?php

namespace App\Entity;

use App\Repository\NotificationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: NotificationRepository::class)]
class Notification
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'notifications')]
    #[ORM\JoinColumn(nullable: false)]
    private $usernameReceiver;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'notificationsSent')]
    #[ORM\JoinColumn(nullable: false)]
    private $usernameSender;

    #[ORM\Column(type: 'string', length: 255)]
    private $subject;

    #[ORM\ManyToOne(targetEntity: Post::class, inversedBy: 'notifications')]
    private $postId;

    #[ORM\ManyToOne(targetEntity: Comment::class, inversedBy: 'notifications')]
    private $commentId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsernameReceiver(): ?User
    {
        return $this->usernameReceiver;
    }

    public function setUsernameReceiver(?User $usernameReceiver): self
    {
        $this->usernameReceiver = $usernameReceiver;

        return $this;
    }

    public function getUsernameSender(): ?User
    {
        return $this->usernameSender;
    }

    public function setUsernameSender(?User $usernameSender): self
    {
        $this->usernameSender = $usernameSender;

        return $this;
    }

    public function getSubject(): ?string
    {
        return $this->subject;
    }

    public function setSubject(string $subject): self
    {
        $this->subject = $subject;

        return $this;
    }

    public function getPostId(): ?Post
    {
        return $this->postId;
    }

    public function setPostId(?Post $postId): self
    {
        $this->postId = $postId;

        return $this;
    }

    public function getCommentId(): ?Comment
    {
        return $this->commentId;
    }

    public function setCommentId(?Comment $commentId): self
    {
        $this->commentId = $commentId;

        return $this;
    }
}
