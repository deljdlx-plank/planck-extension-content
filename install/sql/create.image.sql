CREATE TABLE image
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INT,
    status INT,
    title VARCHAR(255),
    path VARCHAR(1024),
    url VARCHAR(1024),
    presentation TEXT,
    properties TEXT,
    creation_date DATETIME,
    update_date DATETIME
)