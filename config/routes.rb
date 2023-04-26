Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: "pages#home"
  get "home", to: "pages#home"
  get "index", to: "pages#index"
  get "morpion", to: "pages#morpion"
end
