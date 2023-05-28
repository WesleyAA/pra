Rails.application.routes.draw do
  devise_for :users, singular: :user, controllers: { sessions: 'sessions' }
  root 'deadlines#index'

  resources :deadlines

end
