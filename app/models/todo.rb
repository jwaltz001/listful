class Todo
	if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect({host: "localhost", port: 5432, dbname: 'listful'})
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
				 INSERT INTO todos (description, iscomplete)
				 VALUES ('#{opts["description"]}', '#{opts["iscomplete"]}')
				 RETURNING id, description, iscomplete;
			 SQL
		 )
		 return {
			 "id" => results.first["id"].to_i,
			 "user_id" => results.first["user_id"].to_i,
			 "description" => results.first["description"]
		 }
	 end
	 def self.delete(id)
		 p id
		 results = DB.exec("DELETE FROM todos WHERE id=#{id};")
		 return { "deleted" => true }
	 end
	 def self.update(id, opts)
		 p "opts before db + #{opts}"
	 results = DB.exec(
			 <<-SQL
					 UPDATE todos
					 SET iscomplete=#{opts["iscomplete"]}, user_id=#{opts["user_id"]},
					 description='#{opts["description"]}',
					 listName='#{opts["listName"]}'
					 WHERE id=#{id}
					 RETURNING id, user_id, iscomplete, description, listName;
			 SQL
	 )
	 p "results from db #{results.first}"
	 return {
			 "id" => results.first["id"].to_i,
			 "user_id" => results.first["user_id"],
			 "iscomplete" => results.first["iscomplete"],
			 "description" => results.first["description"],
			 "listName" => results.first["listName"]
	 }
	 end

end

# CREATE TABLE todos ( id serial, user_id smallint, description varchar(300), listName varchar(100) ,iscomplete BOOLEAN );
# INSERT INTO todos ( user_id, description, listName, iscomplete ) VALUES (1, 'Finish this project', 'first to do list', false);
