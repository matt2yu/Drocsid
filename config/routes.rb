Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show, :update] do
      resource :server, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resource :server, only: [:create, :destroy, :update, :show] do
      resource :user, only: [:index]
    end

    get '/browse/servers', to: 'servers#browse', as: 'servers_browse'
  end
  
  root "static_pages#root"
end

