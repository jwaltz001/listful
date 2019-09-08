class Movie
	if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'listful'})
    end
	def self.all
		results = DB.exec("SELECT * FROM movies;")
		results.each do |result|
			puts result
		end
	end
  def self.find(id)
      results = DB.exec("SELECT * FROM movies WHERE id = #{id};")
      return {
        "id" => results.first["id"].to_i,
        "title" => results.first["title"],
        "genre" => results.first["genre"]
      }
    end
		def self.create(opts)
      results = DB.exec(
        <<-SQL
          INSERT INTO movies (title, genre, description)
          VALUES ('#{opts["title"]}', '#{opts["genre"]}', '#{opts["description"]}' )
          RETURNING id, title, genre;
        SQL
      )
      return {
        "id" => results.first["id"].to_i,
        "title" => results.first["title"],
        "genre" => results.first["genre"],
				"description" => results.first["description"]
      }
    end
end
# CREATE TABLE movies (id serial, title text, genre text, description text, watched BOOLEAN, listName text, imageURL varchar(200));
# INSERT INTO movies (title, genre, description, watched, imageURL ) VALUES ('Scary Movie', 'Comedy', 'it was hilarious', true, 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg');
# INSERT INTO movies (title, genre, description, watched, imageURL )  VALUES ('Scary Movie 2', 'Comedy', 'it was twice as funny haha', true, 'https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg');
# INSERT INTO movies (title, genre, description, watched, imageURL )  VALUES ('Scary Movie 3', 'Comedy', 'it was 3x hilarious lol', true, 'https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_UX182_CR0,0,182,268_AL_.jpg');
# INSERT INTO movies (title, genre, description, watched, imageURL )
# VALUES ('Braveheart', 'Drama', 'When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.', true, 'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,677,1000_AL_.jpg');
