<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220704085743 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE comment (id INT AUTO_INCREMENT NOT NULL, username_id INT NOT NULL, post_id_id INT NOT NULL, content VARCHAR(500) NOT NULL, file1 VARCHAR(500) DEFAULT NULL, file2 VARCHAR(500) DEFAULT NULL, file3 VARCHAR(500) DEFAULT NULL, file4 VARCHAR(500) DEFAULT NULL, creation_date_time DATE NOT NULL, update_date_time DATE DEFAULT NULL, previous_post VARCHAR(500) DEFAULT NULL, can_respond TINYINT(1) NOT NULL, can_see TINYINT(1) NOT NULL, INDEX IDX_9474526CED766068 (username_id), INDEX IDX_9474526CE85F12B8 (post_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE follower (id INT AUTO_INCREMENT NOT NULL, username_id INT NOT NULL, name_follow_id INT NOT NULL, INDEX IDX_B9D60946ED766068 (username_id), INDEX IDX_B9D60946FBE1EDFE (name_follow_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `like` (id INT AUTO_INCREMENT NOT NULL, username_id INT NOT NULL, id_post_id INT DEFAULT NULL, id_comment_id INT DEFAULT NULL, INDEX IDX_AC6340B3ED766068 (username_id), INDEX IDX_AC6340B39514AA5C (id_post_id), INDEX IDX_AC6340B35DE3FDC4 (id_comment_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE message (id INT AUTO_INCREMENT NOT NULL, username_id INT NOT NULL, user_receiver_id INT NOT NULL, content LONGTEXT NOT NULL, INDEX IDX_B6BD307FED766068 (username_id), INDEX IDX_B6BD307F64482423 (user_receiver_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE post (id INT AUTO_INCREMENT NOT NULL, username_id INT NOT NULL, content VARCHAR(500) NOT NULL, file1 VARCHAR(500) DEFAULT NULL, file2 VARCHAR(500) DEFAULT NULL, file3 VARCHAR(500) DEFAULT NULL, file4 VARCHAR(500) DEFAULT NULL, creation_date_time DATE NOT NULL, update_date_time DATE DEFAULT NULL, previous_post VARCHAR(500) DEFAULT NULL, can_respond TINYINT(1) NOT NULL, can_see TINYINT(1) NOT NULL, INDEX IDX_5A8A6C8DED766068 (username_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE unlike (id INT AUTO_INCREMENT NOT NULL, username_id INT NOT NULL, id_post_id INT DEFAULT NULL, id_comment_id INT DEFAULT NULL, INDEX IDX_41086B52ED766068 (username_id), INDEX IDX_41086B529514AA5C (id_post_id), INDEX IDX_41086B525DE3FDC4 (id_comment_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CED766068 FOREIGN KEY (username_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CE85F12B8 FOREIGN KEY (post_id_id) REFERENCES post (id)');
        $this->addSql('ALTER TABLE follower ADD CONSTRAINT FK_B9D60946ED766068 FOREIGN KEY (username_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE follower ADD CONSTRAINT FK_B9D60946FBE1EDFE FOREIGN KEY (name_follow_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE `like` ADD CONSTRAINT FK_AC6340B3ED766068 FOREIGN KEY (username_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE `like` ADD CONSTRAINT FK_AC6340B39514AA5C FOREIGN KEY (id_post_id) REFERENCES post (id)');
        $this->addSql('ALTER TABLE `like` ADD CONSTRAINT FK_AC6340B35DE3FDC4 FOREIGN KEY (id_comment_id) REFERENCES comment (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FED766068 FOREIGN KEY (username_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307F64482423 FOREIGN KEY (user_receiver_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE post ADD CONSTRAINT FK_5A8A6C8DED766068 FOREIGN KEY (username_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE unlike ADD CONSTRAINT FK_41086B52ED766068 FOREIGN KEY (username_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE unlike ADD CONSTRAINT FK_41086B529514AA5C FOREIGN KEY (id_post_id) REFERENCES post (id)');
        $this->addSql('ALTER TABLE unlike ADD CONSTRAINT FK_41086B525DE3FDC4 FOREIGN KEY (id_comment_id) REFERENCES comment (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `like` DROP FOREIGN KEY FK_AC6340B35DE3FDC4');
        $this->addSql('ALTER TABLE unlike DROP FOREIGN KEY FK_41086B525DE3FDC4');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CE85F12B8');
        $this->addSql('ALTER TABLE `like` DROP FOREIGN KEY FK_AC6340B39514AA5C');
        $this->addSql('ALTER TABLE unlike DROP FOREIGN KEY FK_41086B529514AA5C');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CED766068');
        $this->addSql('ALTER TABLE follower DROP FOREIGN KEY FK_B9D60946ED766068');
        $this->addSql('ALTER TABLE follower DROP FOREIGN KEY FK_B9D60946FBE1EDFE');
        $this->addSql('ALTER TABLE `like` DROP FOREIGN KEY FK_AC6340B3ED766068');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FED766068');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307F64482423');
        $this->addSql('ALTER TABLE post DROP FOREIGN KEY FK_5A8A6C8DED766068');
        $this->addSql('ALTER TABLE unlike DROP FOREIGN KEY FK_41086B52ED766068');
        $this->addSql('DROP TABLE comment');
        $this->addSql('DROP TABLE follower');
        $this->addSql('DROP TABLE `like`');
        $this->addSql('DROP TABLE message');
        $this->addSql('DROP TABLE post');
        $this->addSql('DROP TABLE unlike');
        $this->addSql('DROP TABLE user');
    }
}
