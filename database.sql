# PostgreSQL
CREATE TABLE accounts(
    id serial primary key,
    firstName varchar(255),
    lastName varchar(255)
);

CREATE TABLE books(
    id serial primary key,
    title varchar(255),
    author varchar(255),
    user_id integer,
    foreign key (user_id) references accounts(id)
);

#MySQL
create table nodejs.users(
	id int not null auto_increment,
	firstName varchar(255) not null,
	lastName varchar(255) not null,
	age int default null,
	isFree boolean default true,
	primary key (id)
);

create table nodejs.books(
	id int not null auto_increment,
	title varchar(255) not null,
	author varchar(255) not null,
	user_id int not null,
	primary key (id),
	foreign key (user_id) references users(id)
);