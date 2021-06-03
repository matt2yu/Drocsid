Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create] do
      resource :server, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resource :server, only: [:create, :destroy, :update, :show]
  end
  
  root "static_pages#root"
end

