Rails.application.routes.draw do
  resources :bookings
  resources :users

  resources :rooms do
    get 'manage', on: :collection
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
