Rails.application.routes.draw do
  # root 'welcome#index'
  root 'sessions#new'

  resources :sessions, only: [:new, :create, :destroy]

  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  resources :bookings do
  get 'view_history', on: :member
  get 'new_reservation', on: :collection
  get 'view_current_reservation', on: :member
  end

  resources :users do
    get 'show_admin', on: :collection
    get 'manage_admins', on: :collection
    get 'manage_members', on: :collection
    get 'current_reservation', on: :member
    get 'booking_history', on: :member
    get 'userhome', on: :collection
  end

  resources :rooms do
    get 'manage', on: :collection
    post 'view_room_details', on: :collection
    get 'search', on: :collection
    get 'search_result', on: :collection
    post 'custom_update', on: :collection
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end