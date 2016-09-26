class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/1
  # GET /users/1.json
  def show_admin
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        # format.html { redirect_to @user, notice: 'User was successfully created.' }
        # format.json { render :show, status: :created, location: @user }
        format.html {
          if(!current_user)
            session[:user_id] = @user.id
          end

            if(current_user.role == 2 || current_user.role == 0)
              redirect_to show_admin_users_url, notice: 'User was succesfully created.'
            else
              redirect_to '/users/userhome', notice: 'User was successfully created.'
            end
        }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # GET /rooms/manage_admins
  def manage_admins
    @users = User.where('role=? OR role=?', 0, 2);
  end

  # GET /rooms/manage_members
  def manage_members
    @users = User.where('role=?', 1);
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)

        format.html {
          if(current_user.role == 2 || current_user.role == 0)
            redirect_to show_admin_users_url, notice: 'User was succesfully updated.'
          else
            redirect_to userhome_users_url, notice: 'User was successfully updated.'
          end
            }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:email, :name, :password, :role)
    end
end
