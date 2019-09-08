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
	def self.create(opts)
      results = DB.exec(
        <<-SQL
          INSERT INTO songs (name, age)
          VALUES ('#{opts["name"]}', #{opts["age"]})
          RETURNING id, name, age;
        SQL
      )
      return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "age" => results.first["age"].to_i
      }
    end
end

# CREATE TABLE songs (id serial, title text, genre text, description text, listenedTo BOOLEAN, listName text);
# INSERT INTO songs (title, genre, description, listenedTo) VALUES ('Fallen', 'Jaden Smith', 'HE was singing', true);
