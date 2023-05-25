Rails.application.routes.draw do
  root 'logins#index'

  post '/login_user', to: 'logins#login_user'

  get '/prazos/index', to: 'prazos#index'
end
