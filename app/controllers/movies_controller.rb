class MoviesController < ApplicationController
	skip_before_action :verify_authenticity_token
    def index
        render json: Movie.all
    end
		# show
 		def show
		 render json: Movie.find(params["id"])
 		end
 		# create
 		def create
		 render json: Movie.create(params["post"])
 		end
 		# delete
 		def delete
	 		render json: Movie.delete(params["id"])
 		end
		# update
 		def update
	 		render json: Movie.update(params["id"], params["post"])
 		end
end
