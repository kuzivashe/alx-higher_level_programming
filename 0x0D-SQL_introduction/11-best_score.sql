-- Prints sorted table values by higher scores only
SELECT score, name FROM second_table WHERE score >= 10 ORDER BY score DESC, name;
