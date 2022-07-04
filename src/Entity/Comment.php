<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentRepository::class)]
class Comment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'comments')]
    #[ORM\JoinColumn(nullable: false)]
    private $Username;

    #[ORM\ManyToOne(targetEntity: Post::class, inversedBy: 'comments')]
    #[ORM\JoinColumn(nullable: false)]
    private $PostId;

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

    #[ORM\OneToMany(mappedBy: 'IdComment', targetEntity: Like::class)]
    private $likes;

    #[ORM\OneToMany(mappedBy: 'IdComment', targetEntity: Unlike::class)]
    private $unlikes;

    public function __construct()
    {
        $this->likes = new ArrayCollection();
        $this->unlikes = new ArrayCollection();
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

    public function getPostId(): ?Post
    {
        return $this->PostId;
    }

    public function setPostId(?Post $PostId): self
    {
        $this->PostId = $PostId;

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
            $like->setIdComment($this);
        }

        return $this;
    }

    public function removeLike(Like $like): self
    {
        if ($this->likes->removeElement($like)) {
            // set the owning side to null (unless already changed)
            if ($like->getIdComment() === $this) {
                $like->setIdComment(null);
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
            $unlike->setIdComment($this);
        }

        return $this;
    }

    public function removeUnlike(Unlike $unlike): self
    {
        if ($this->unlikes->removeElement($unlike)) {
            // set the owning side to null (unless already changed)
            if ($unlike->getIdComment() === $this) {
                $unlike->setIdComment(null);
            }
        }

        return $this;
    }
}
