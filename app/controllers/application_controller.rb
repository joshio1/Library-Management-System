class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private
  def current_user
    User.where(id: session[:user_id]).first
  end

  def home_path
    if(current_user.role == 1)
      'users/userhome'
    else
      show_admin_users_url
    end
  end

  helper_method :current_user
  helper_method :home_path

end
