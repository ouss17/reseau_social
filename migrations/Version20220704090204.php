<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220704090204 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD firstname VARCHAR(255) DEFAULT NULL, ADD lastname VARCHAR(255) DEFAULT NULL, ADD pseudo VARCHAR(255) NOT NULL, ADD email VARCHAR(255) NOT NULL, ADD birth_date DATE DEFAULT NULL, ADD bio VARCHAR(500) DEFAULT NULL, ADD web VARCHAR(500) DEFAULT NULL, ADD localisation VARCHAR(500) DEFAULT NULL, ADD genre VARCHAR(255) DEFAULT NULL, ADD creation_date_time DATETIME NOT NULL, ADD private TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP firstname, DROP lastname, DROP pseudo, DROP email, DROP birth_date, DROP bio, DROP web, DROP localisation, DROP genre, DROP creation_date_time, DROP private');
    }
}
