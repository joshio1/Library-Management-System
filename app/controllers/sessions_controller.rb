class SessionsController < ApplicationController
  def create

    user = User.find_by_email(params[:email])

    if user and user.authenticate(params[:password])

      session[:user_id] = user.id
      #redirect_to user_url, notice: 'Logged in'
      if current_user.role ==0 || current_user.role ==2
        redirect_to show_admin_users_url
      else
        redirect_to userhome_users_url
      end

    else
      redirect_to login_url, alert:"Invalid Username or Password"
    end

  end

  def new
    if(current_user != nil)
      redirect_to home_path
    end
  end

  def destroy
    session[:user_id]=nil
    redirect_to root_url
  end
end
