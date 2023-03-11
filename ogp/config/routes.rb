Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#home"
  namespace :api do
    namespace :v1 do
      resources :roadmaps
    end
  end

  get '*path', to: 'pages#home', via: :all
end
