Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  Rails.application.routes.draw do
    namespace :api, defaults: { format: :json } do
        resources :users 
        resource :session, only: [:create, :destroy]
        post '/search', to: 'users#search'
      end
      root to: 'root#root'
    end
end
