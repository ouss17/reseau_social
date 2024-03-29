<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PostRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PostRepository::class)]
#[ApiResource]
class Post
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'posts')]
    #[ORM\JoinColumn(nullable: false)]
    private $Username;

    #[ORM\Column(type: 'string', length: 500)]
    private $Content;

    #[ORM\Column(type: 'string', length: 500, nullable: true)]
    private $File1;

    #[ORM\Column(type: 'string', length: 500, nullable: true)]
    private $File2;

    #[ORM\Column(type: 'string', length: 500, nullable: true)]
    private $File3;

    #[ORM\Column(type: 'string', length: 500, nullable: true)]
    private $File4;

    #[ORM\Column(type: 'date')]
    private $CreationDateTime;

    #[ORM\Column(type: 'date', nullable: true)]
    private $UpdateDateTime;

    #[ORM\Column(type: 'string', length: 500, nullable: true)]
    private $PreviousPost;

    #[ORM\Column(type: 'boolean')]
    private $CanRespond;

    #[ORM\Column(type: 'boolean')]
    private $CanSee;

    #[ORM\OneToMany(mappedBy: 'PostId', targetEntity: Comment::class)]
    private $comments;

    #[ORM\OneToMany(mappedBy: 'IdPost', targetEntity: Like::class)]
    private $likes;

    #[ORM\OneToMany(mappedBy: 'IdPost', targetEntity: Unlike::class)]
    private $unlikes;

    #[ORM\OneToMany(mappedBy: 'postId', targetEntity: Notification::class)]
    private $notifications;


    public function __construct()
    {
        $this->comments = new ArrayCollection();
        $this->likes = new ArrayCollection();
        $this->unlikes = new ArrayCollection();
        $this->notifications = new ArrayCollection();
    }

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

    public function getContent(): ?string
    {
        return $this->Content;
    }

    public function setContent(string $Content): self
    {
        $this->Content = $Content;

        return $this;
    }

    public function getFile1(): ?string
    {
        return $this->File1;
    }

    public function setFile1(?string $File1): self
    {
        $this->File1 = $File1;

        return $this;
    }

    public function getFile2(): ?string
    {
        return $this->File2;
    }

    public function setFile2(?string $File2): self
    {
        $this->File2 = $File2;

        return $this;
    }

    public function getFile3(): ?string
    {
        return $this->File3;
    }

    public function setFile3(?string $File3): self
    {
        $this->File3 = $File3;

        return $this;
    }

    public function getFile4(): ?string
    {
        return $this->File4;
    }

    public function setFile4(?string $File4): self
    {
        $this->File4 = $File4;

        return $this;
    }

    public function getCreationDateTime(): ?\DateTimeInterface
    {
        return $this->CreationDateTime;
    }

    public function setCreationDateTime(\DateTimeInterface $CreationDateTime): self
    {
        $this->CreationDateTime = $CreationDateTime;

        return $this;
    }

    public function getUpdateDateTime(): ?\DateTimeInterface
    {
        return $this->UpdateDateTime;
    }

    public function setUpdateDateTime(?\DateTimeInterface $UpdateDateTime): self
    {
        $this->UpdateDateTime = $UpdateDateTime;

        return $this;
    }

    public function getPreviousPost(): ?string
    {
        return $this->PreviousPost;
    }

    public function setPreviousPost(?string $PreviousPost): self
    {
        $this->PreviousPost = $PreviousPost;

        return $this;
    }

    public function isCanRespond(): ?bool
    {
        return $this->CanRespond;
    }

    public function setCanRespond(bool $CanRespond): self
    {
        $this->CanRespond = $CanRespond;

        return $this;
    }

    public function isCanSee(): ?bool
    {
        return $this->CanSee;
    }

    public function setCanSee(bool $CanSee): self
    {
        $this->CanSee = $CanSee;

        return $this;
    }

    /**
     * @return Collection<int, Comment>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setPostId($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getPostId() === $this) {
                $comment->setPostId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Like>
     */
    public function getLikes(): Collection
    {
        return $this->likes;
    }

    public function addLike(Like $like): self
    {
        if (!$this->likes->contains($like)) {
            $this->likes[] = $like;
            $like->setIdPost($this);
        }

        return $this;
    }

    public function removeLike(Like $like): self
    {
        if ($this->likes->removeElement($like)) {
            // set the owning side to null (unless already changed)
            if ($like->getIdPost() === $this) {
                $like->setIdPost(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Unlike>
     */
    public function getUnlikes(): Collection
    {
        return $this->unlikes;
    }

    public function addUnlike(Unlike $unlike): self
    {
        if (!$this->unlikes->contains($unlike)) {
            $this->unlikes[] = $unlike;
            $unlike->setIdPost($this);
        }

        return $this;
    }

    public function removeUnlike(Unlike $unlike): self
    {
        if ($this->unlikes->removeElement($unlike)) {
            // set the owning side to null (unless already changed)
            if ($unlike->getIdPost() === $this) {
                $unlike->setIdPost(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Notification>
     */
    public function getNotifications(): Collection
    {
        return $this->notifications;
    }

    public function addNotification(Notification $notification): self
    {
        if (!$this->notifications->contains($notification)) {
            $this->notifications[] = $notification;
            $notification->setPostId($this);
        }

        return $this;
    }

    public function removeNotification(Notification $notification): self
    {
        if ($this->notifications->removeElement($notification)) {
            // set the owning side to null (unless already changed)
            if ($notification->getPostId() === $this) {
                $notification->setPostId(null);
            }
        }

        return $this;
    }

}
