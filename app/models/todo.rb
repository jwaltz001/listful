class Todo
	if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostuser_id, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'listful'})
    end
	def self.all
		results = DB.exec("SELECT * FROM todos;")
		results.each do |result|
			puts result
		end
	end
	def self.create(opts)
		 results = DB.exec(
			 <<-SQL
				 INSERT INTO todos (user_id, description, isComplete)
				 VALUES ('#{opts["user_id"]}', #{opts["description"]}, #{opts["isComplete"]})
				 RETURNING id, user_id, description;
			 SQL
		 )
		 return {
			 "id" => results.first["id"].to_i,
			 "user_id" => results.first["user_id"].to_i,
			 "description" => results.first["description"]
		 }
	 end

	 def self.delete(id)
		 results = DB.exec("DELETE FROM todos WHERE id=#{id};")
		 return { "deleted" => true }
	 end

	 def self.update(id, opts)
		 results = DB.exec(
			 <<-SQL
				 UPDATE todos
				 SET user_id='#{opts["user_id"]}', description=#{opts["description"]}
				 WHERE id = #{id}
				 RETURNING id, user_id, description;
			 SQL
		 )
		 return {
			 "id" => results.first["id"].to_i,
			 "user_id" => results.first["user_id"],
			 "description" => results.first["description"].to_i
		 }
	 end
end

# CREATE TABLE todos ( id serial, user_id smallint, description varchar(300), listuser_id varchar(100) ,isComplete BOOLEAN );
# INSERT INTO todos ( user_id, description, listuser_id, isComplete ) VALUES (1, 'Finish this project', 'first to do list', false);
