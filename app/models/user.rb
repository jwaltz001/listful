
class User
	DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'listful'})
	def self.all
		results = DB.exec("SELECT * FROM users;")
		results.each do |result|
			puts result
		end
	end
end

# INSERT INTO users ( user_name, password, first_name, admin ) VALUES ('justin', 'justin', 'justin', true );
# CREATE TABLE users ( id serial, user_name varchar(25) NOT NULL, password varchar(25) NOT NULL, first_name varchar(25), admin BOOLEAN );
