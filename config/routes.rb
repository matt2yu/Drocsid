Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resource :server, only: [:create, :destroy, :show, :index] do
      resource :user, only: [:index]
    end
  end
  
  root "static_pages#root"
end

