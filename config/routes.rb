Rails.application.routes.draw do
  devise_for :users, singular: :user, controllers: { sessions: 'sessions' }
  root 'prazos#index'

  get '/prazos/index', to: 'prazos#index'
end
