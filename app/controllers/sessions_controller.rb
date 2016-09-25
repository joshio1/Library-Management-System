class SessionsController < ApplicationController
  def create

    user = User.find_by_email(params[:email])

    if user and user.authenticate(params[:password])

      session[:user_id] = user.id
      #redirect_to user_url, notice: 'Logged in'
      if current_user.role
        render 'users/show_admin'
      else
        render 'users/userhome'
      end

    else
      redirect_to login_url, alert:"Invalid Username or Password"
    end

  end

  def new
  end

  def destroy
    session[:user_id]=nil
    redirect_to root_url, notice: "Logged out"
  end
end
