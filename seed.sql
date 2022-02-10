DROP TABLE IF EXISTS chucksters;

CREATE TABLE chucksters(
  id SERIAL PRIMARY KEY,
  title_chucksters VARCHAR(255) DEFAULT NULL,
  content_chucksters VARCHAR(2000) DEFAULT NULL,
  img_chucksters VARCHAR(2000) DEFAULT NULL,
  date timestamp DEFAULT now()
);

INSERT INTO chucksters (title_chucksters, content_chucksters, img_chucksters, date ) VALUES ('Love Is In The Air', 'Chuck heard love was in the air so he held his breath and started KICKING', 'https://d2mkojm4rk40ta.cloudfront.net/us-east-1-src/prod/clientUploads/2021-04/19/1/107836/002a2c47-e078-46b7-971a-c7cb6656e9f2-bGFAEM.png',(now() - interval '1 minutes') );
INSERT INTO chucksters (title_chucksters, content_chucksters, img_chucksters, date ) VALUES ('Hulk Norris', 'Legendary action star Chuck Norris has just turned 80. Long live, Chuck! The actor who is known for beating every on-screen character who dares to get in his way was born on March 10th, 1940. His penchant for inflicting pain isnot surprising given that he is a champion of numerous martial arts contests. He even invented a martial arts system known as Chun Kuk Doo.', 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/03/Chuck-memes-feature.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5',(now() - interval '1 minutes') );
INSERT INTO chucksters (title_chucksters, content_chucksters, img_chucksters, date ) VALUES ('Bare Knuckles', '"There have been numerous bear sightings across the United States as of late. However, we think it may be due to Mr. Norris walking through the woods. Frankly, the bears do not want to be near him.

Plus, they do not want to end up like one of their friends. The grizzly bear is so afraid of Mr. Norris that he is afraid to get up and walk out of the mans home. We guess it could lure Chuck with a picnic basket, but it still might not have time to safely get out."', 'https://static2.srcdn.com/wordpress/wp-content/uploads/2020/03/Chuck-Norris-Bear.jpg?q=50&fit=crop&w=963&h=1083&dpr=1.5',(now() - interval '1 minutes') );
INSERT INTO chucksters (title_chucksters, content_chucksters, img_chucksters, date ) VALUES ('Last Responder', '"The 911 service calls Chuck Norris when help is needed? Of course they do. After all, he is Walker, Texas Ranger. Why would they not call him?

We understand he cannot be in all places at once (except when he wants to be, naturally). Perhaps he delegates his power to others to help those in need. In the end, a percentage of Mr. Norris is better than none at all."', 'https://static2.srcdn.com/wordpress/wp-content/uploads/2020/03/Chuck-Norris-911.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5',(now() - interval '1 minutes') );


INSERT INTO chucksters (title_chucksters, content_chucksters, img_chucksters, date ) VALUES ('Roll With The Punches', '"The two toughest men out there, Chuck Norris and Arnold Schwarzenegger, seem to get along fine in real life. They were actually in Expendables 2 together. However, when Arnold is transported to the future and becomes the Terminator, things change.

Mr. Norris is no longer a pal. He is downright ticked off when the advanced robot asks him for his clothes and motorcycle. You would think the Terminator would know this from the look in Chucks eyes. However, it does not understand human emotion. As a result, it would mean broken servos for the Terminator."', 'https://static2.srcdn.com/wordpress/wp-content/uploads/2020/03/Chuck-Norris-Terminator.jpg?q=50&fit=crop&w=963&h=1444&dpr=1.5',(now() - interval '1 minutes') );

INSERT INTO chucksters (title_chucksters, content_chucksters, img_chucksters, date ) VALUES ('A Man And His Tiger', '"Punks own Harleys a real man rides a tiger while holding a chainsaw in one hand"', 'https://images.penguinrandomhouse.com/cover/9781592407934',(now() - interval '1 minutes') );

