CREATE TABLE user_infomation(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL
);
INSERT INTO user_infomation(id, first_name, last_name, phone_number, email , address , user_letter
)
VALUES(1 , 'garlapati' , 'velugondaiah' , '9090909090' , 'VELUGU@gmail.com','ap' , 'red')

SELECT * FROM user_infomation;

ALTER TABLE user_infomation
ADD COLUMN user_letter TEXT

DELETE  FROM user_infomation
WHERE first_name = 'Velugondaiah'