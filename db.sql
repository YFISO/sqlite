
create table greetings(
id integer PRIMARY KEY AUTOINCREMENT,
language text,
greeting text
);

SELECT * from greetings
SELECT count(*) from greetings
insert into greetings(language, greeting) values ('zulu', 'sawubona')