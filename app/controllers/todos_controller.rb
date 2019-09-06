class TodosController < ApplicationController
	skip_before_action :verify_authenticity_token
    def index
        render json: Todo.all
    end
end
