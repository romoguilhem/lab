Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: "pages#home"
  get "home", to: "pages#home"
  get "index", to: "pages#index",            as: :index
  get "morpio/:id", to: "morpios#show",      as: :morpio
  get '*unmatched_route', to: 'pages#home'
end
