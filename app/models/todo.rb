class Todo
	if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'listful'})
    end
	def self.all
		results = DB.exec("SELECT * FROM todos;")
		results.each do |result|
			puts result
		end
	end

end

# CREATE TABLE todos ( id serial, user_id smallint, description varchar(300), listName varchar(100) ,isComplete BOOLEAN );
# INSERT INTO todos ( user_id, description, listName, isComplete ) VALUES (1, 'Finish this project', 'first to do list', false);
