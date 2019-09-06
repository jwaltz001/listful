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
end

# CREATE TABLE songs (id serial, title text, genre text, description text, listenedTo BOOLEAN, listName text);
# INSERT INTO songs (title, genre, description, listenedTo) VALUES ('Fallen', 'Jaden Smith', 'HE was singing', true);
