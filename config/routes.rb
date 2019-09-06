Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  	root 'site#index'

	# USER ROUTES
	get '/users', to: 'users#index'

	# TODO ROUTES
	get '/todos', to: 'todos#index'
end
