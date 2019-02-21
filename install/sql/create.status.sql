CREATE TABLE content_status
(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rank INT,
  previousstatus_id INT,
  nextstatus_id INT,
  qname VARCHAR(255),
  name VARCHAR(255),
  description TEXT,
  properties TEXT,
  creation_date DATETIME,
  update_date DATETIME
)