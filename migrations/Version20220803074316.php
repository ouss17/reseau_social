<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220803074316 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE notification (id INT AUTO_INCREMENT NOT NULL, username_receiver_id INT NOT NULL, username_sender_id INT NOT NULL, post_id_id INT DEFAULT NULL, comment_id_id INT DEFAULT NULL, subject VARCHAR(255) NOT NULL, INDEX IDX_BF5476CAA17A2A09 (username_receiver_id), INDEX IDX_BF5476CACB0A60A1 (username_sender_id), INDEX IDX_BF5476CAE85F12B8 (post_id_id), INDEX IDX_BF5476CAD6DE06A6 (comment_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE notification ADD CONSTRAINT FK_BF5476CAA17A2A09 FOREIGN KEY (username_receiver_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE notification ADD CONSTRAINT FK_BF5476CACB0A60A1 FOREIGN KEY (username_sender_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE notification ADD CONSTRAINT FK_BF5476CAE85F12B8 FOREIGN KEY (post_id_id) REFERENCES post (id)');
        $this->addSql('ALTER TABLE notification ADD CONSTRAINT FK_BF5476CAD6DE06A6 FOREIGN KEY (comment_id_id) REFERENCES comment (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE notification');
    }
}
