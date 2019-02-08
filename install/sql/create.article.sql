CREATE TABLE content_article
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INT,

    image_id INT,
    category_id INT,
    type_id INT,

    status INT,
    title VARCHAR(255),
    image VARCHAR(255),
    presentation TEXT,
    content TEXT,
    html TEXT,
    properties TEXT,
    creation_date DATETIME,
    update_date DATETIME



)