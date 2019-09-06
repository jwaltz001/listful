class TodosController < ApplicationController
	skip_before_action :verify_authenticity_token
    def index
        render json: Todo.all
    end
		show
 		def show
		 render json: Todo.find(params["id"])
 		end

 # create
 		def create
		 render json: Todo.create(params["post"])
 		end

 # delete
 		def delete
	 		render json: Todo.delete(params["id"])
 		end

 # update
 		def update
	 		render json: Todo.update(params["id"], params["post"])
 		end
end
