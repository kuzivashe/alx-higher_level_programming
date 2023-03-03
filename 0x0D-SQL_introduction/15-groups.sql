-- List number of records with the same score in the
-- second_table of the database hbtn_0c_0 in the mySQL server
SELECT score, COUNT (score) AS number FROM second_table GROUP BY score ORDER BY score DESC;
