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
        "genre" => results.first["genre"].to_i
      }
    end
end
# CREATE TABLE movies (id serial, title text, genre text, description text, watched BOOLEAN, listName text);
# INSERT INTO movies (title, genre, description, watched) VALUES ('Scary Movie', 'Comedy', 'it was hilarious', true);
# INSERT INTO movies (title, genre, description, watched)  VALUES ('Scary Movie 2', 'Comedy', 'it was twice as funny haha', true);
# INSERT INTO movies (title, genre, description, watched)  VALUES ('Scary Movie 3', 'Comedy', 'it was 3x hilarious lol', true);
