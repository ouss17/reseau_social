<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    private $username;

    #[ORM\Column(type: 'json')]
    private $roles = [];

    #[ORM\Column(type: 'string')]
    private $password;

    #[ORM\OneToMany(mappedBy: 'Username', targetEntity: Post::class)]
    private $posts;

    #[ORM\OneToMany(mappedBy: 'Username', targetEntity: Comment::class)]
    private $comments;

    #[ORM\OneToMany(mappedBy: 'Username', targetEntity: Follower::class)]
    private $followers;

    #[ORM\OneToMany(mappedBy: 'NameFollow', targetEntity: Follower::class)]
    private $follows;

    #[ORM\OneToMany(mappedBy: 'Username', targetEntity: Message::class)]
    private $messages;

    #[ORM\OneToMany(mappedBy: 'UserReceiver', targetEntity: Message::class)]
    private $messagesReceive;

    #[ORM\OneToMany(mappedBy: 'Username', targetEntity: Like::class)]
    private $likes;

    #[ORM\OneToMany(mappedBy: 'Username', targetEntity: Unlike::class)]
    private $unlikes;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Firstname;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Lastname;

    #[ORM\Column(type: 'string', length: 255)]
    private $Pseudo;

    #[ORM\Column(type: 'string', length: 255)]
    private $Email;

    #[ORM\Column(type: 'date', nullable: true)]
    private $BirthDate;

    #[ORM\Column(type: 'string', length: 500, nullable: true)]
    private $Bio;

    #[ORM\Column(type: 'string', length: 500, nullable: true)]
    private $Web;

    #[ORM\Column(type: 'string', length: 500, nullable: true)]
    private $Localisation;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Genre;

    #[ORM\Column(type: 'datetime')]
    private $CreationDateTime;

    #[ORM\Column(type: 'boolean')]
    private $Private;

    public function __construct()
    {
        $this->posts = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->followers = new ArrayCollection();
        $this->follows = new ArrayCollection();
        $this->messages = new ArrayCollection();
        $this->messagesReceive = new ArrayCollection();
        $this->likes = new ArrayCollection();
        $this->unlikes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return Collection<int, Post>
     */
    public function getPosts(): Collection
    {
        return $this->posts;
    }

    public function addPost(Post $post): self
    {
        if (!$this->posts->contains($post)) {
            $this->posts[] = $post;
            $post->setUsername($this);
        }

        return $this;
    }

    public function removePost(Post $post): self
    {
        if ($this->posts->removeElement($post)) {
            // set the owning side to null (unless already changed)
            if ($post->getUsername() === $this) {
                $post->setUsername(null);
            }
        }

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
            $comment->setUsername($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getUsername() === $this) {
                $comment->setUsername(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Follower>
     */
    public function getFollowers(): Collection
    {
        return $this->followers;
    }

    public function addFollower(Follower $follower): self
    {
        if (!$this->followers->contains($follower)) {
            $this->followers[] = $follower;
            $follower->setUsername($this);
        }

        return $this;
    }

    public function removeFollower(Follower $follower): self
    {
        if ($this->followers->removeElement($follower)) {
            // set the owning side to null (unless already changed)
            if ($follower->getUsername() === $this) {
                $follower->setUsername(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Follower>
     */
    public function getFollows(): Collection
    {
        return $this->follows;
    }

    public function addFollow(Follower $follow): self
    {
        if (!$this->follows->contains($follow)) {
            $this->follows[] = $follow;
            $follow->setNameFollow($this);
        }

        return $this;
    }

    public function removeFollow(Follower $follow): self
    {
        if ($this->follows->removeElement($follow)) {
            // set the owning side to null (unless already changed)
            if ($follow->getNameFollow() === $this) {
                $follow->setNameFollow(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Message>
     */
    public function getMessages(): Collection
    {
        return $this->messages;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->messages->contains($message)) {
            $this->messages[] = $message;
            $message->setUsername($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->messages->removeElement($message)) {
            // set the owning side to null (unless already changed)
            if ($message->getUsername() === $this) {
                $message->setUsername(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Message>
     */
    public function getMessagesReceive(): Collection
    {
        return $this->messagesReceive;
    }

    public function addMessagesReceive(Message $messagesReceive): self
    {
        if (!$this->messagesReceive->contains($messagesReceive)) {
            $this->messagesReceive[] = $messagesReceive;
            $messagesReceive->setUserReceiver($this);
        }

        return $this;
    }

    public function removeMessagesReceive(Message $messagesReceive): self
    {
        if ($this->messagesReceive->removeElement($messagesReceive)) {
            // set the owning side to null (unless already changed)
            if ($messagesReceive->getUserReceiver() === $this) {
                $messagesReceive->setUserReceiver(null);
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
            $like->setUsername($this);
        }

        return $this;
    }

    public function removeLike(Like $like): self
    {
        if ($this->likes->removeElement($like)) {
            // set the owning side to null (unless already changed)
            if ($like->getUsername() === $this) {
                $like->setUsername(null);
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
            $unlike->setUsername($this);
        }

        return $this;
    }

    public function removeUnlike(Unlike $unlike): self
    {
        if ($this->unlikes->removeElement($unlike)) {
            // set the owning side to null (unless already changed)
            if ($unlike->getUsername() === $this) {
                $unlike->setUsername(null);
            }
        }

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->Firstname;
    }

    public function setFirstname(?string $Firstname): self
    {
        $this->Firstname = $Firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->Lastname;
    }

    public function setLastname(?string $Lastname): self
    {
        $this->Lastname = $Lastname;

        return $this;
    }

    public function getPseudo(): ?string
    {
        return $this->Pseudo;
    }

    public function setPseudo(string $Pseudo): self
    {
        $this->Pseudo = $Pseudo;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->Email;
    }

    public function setEmail(string $Email): self
    {
        $this->Email = $Email;

        return $this;
    }

    public function getBirthDate(): ?\DateTimeInterface
    {
        return $this->BirthDate;
    }

    public function setBirthDate(?\DateTimeInterface $BirthDate): self
    {
        $this->BirthDate = $BirthDate;

        return $this;
    }

    public function getBio(): ?string
    {
        return $this->Bio;
    }

    public function setBio(?string $Bio): self
    {
        $this->Bio = $Bio;

        return $this;
    }

    public function getWeb(): ?string
    {
        return $this->Web;
    }

    public function setWeb(?string $Web): self
    {
        $this->Web = $Web;

        return $this;
    }

    public function getLocalisation(): ?string
    {
        return $this->Localisation;
    }

    public function setLocalisation(?string $Localisation): self
    {
        $this->Localisation = $Localisation;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->Genre;
    }

    public function setGenre(?string $Genre): self
    {
        $this->Genre = $Genre;

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

    public function isPrivate(): ?bool
    {
        return $this->Private;
    }

    public function setPrivate(bool $Private): self
    {
        $this->Private = $Private;

        return $this;
    }
}
