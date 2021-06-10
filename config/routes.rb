Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show, :update]
    resources :servers, only: [:create, :destroy, :show, :index] do 
      resources :channels
    end

    resources :messages, only: [:create, :index]
  end
  
  root "static_pages#root"
  mount ActionCable.server, at: '/cable'
end

