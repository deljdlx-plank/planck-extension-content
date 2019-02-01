CREATE TABLE article
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INT,
    status INT,
    title VARCHAR(255),
    image VARCHAR(255),
    presentation TEXT,
    content TEXT,
    properties TEXT,
    creation_date DATETIME,
    update_date DATETIME,
    image_id INT
)