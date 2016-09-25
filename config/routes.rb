Rails.application.routes.draw do
  resources :bookings
  resources :users do
    get 'show_admin', on: :member
    get 'manage_admins', on: :collection
    get 'manage_members', on: :collection
  end

  resources :rooms do
    get 'manage', on: :collection
    post 'view_room_details', on: :collection
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end