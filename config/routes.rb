Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'site#index'

	# USER ROUTES
	get '/users', to: 'users#index'

	# TODO ROUTES
	get '/todos', to: 'todos#index'
  	get '/todos/:id', to: 'todos#show'
  	post '/todos', to: 'todos#create'
  	delete '/todos/:id', to: 'todos#delete'
    put '/todos/:id', to: 'todos#update'

  	get '/movies', to: 'movies#index'
  	get '/movies/:id', to: 'movies#show'
  	post '/movies', to: 'movies#create'
  	delete '/movies/:id', to: 'movies#delete'
    put '/movies/:id', to: 'movies#update'


  	get '/music', to: 'music#index'
  	get '/music/:id', to: 'music#show'
  	post '/music/id', to: 'music#create'
  	delete '/music/:id', to: 'music#delete'

end
