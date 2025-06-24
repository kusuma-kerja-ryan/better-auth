CREATE TABLE `pantect` (
	`id` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `pantect_id` PRIMARY KEY(`id`),
	CONSTRAINT `pantect_email_unique` UNIQUE(`email`)
);
