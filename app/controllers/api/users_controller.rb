class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def index
    server = Server.find(params[:server_id])
    @users = server.members
    render "api/users/index"
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  private
  def selected_user
    User.find(params[:id])
  end
  
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end