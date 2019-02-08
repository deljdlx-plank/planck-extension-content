CREATE TABLE content_type
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    leftbound INT,
    rightbound INT,
    parent_id INT,
    depth INT,
    rank INT,
    weight INT,
    path VARCHAR(1024),
    qname VARCHAR(255),
    name VARCHAR(255),
    description TEXT,
    properties TEXT,
    status INT,
    creation_date DATETIME,
    update_date DATETIME
)