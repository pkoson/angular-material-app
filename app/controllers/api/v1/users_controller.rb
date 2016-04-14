class Api::V1::UsersController < ApplicationController
  before_action :authenticate_api_v1_user!
  before_action :set_user, except: [:index, :create]

  def index
    users = User.all
    render json: {
      data: {
        users: users
      }
    }, status: 200
  end

  def create
    user = User.new(user_params)

    if user.save
      data = {
        user: {
          name: user.name, 
          nickname: user.nickname, 
          email: user.email, 
          role: user.role, 
          created_at: user.created_at
        }
      }
      success = true
      status = 201
    else
      data = user.errors
      success = false
      status = 200
    end

    render json: {
      success: success,
      data: data
    }, status: status
  end

  def show
    render json: {
      data: {
        user: {
          name: @user.name, 
          nickname: @user.nickname, 
          email: @user.email
        }
      }
    }, status: 200
  end

  def update
  end

  def destroy
  end

private
  def set_user
    @user = User.find(params[:id])  
  end

  def user_params
    params.require(:user).permit(:name, :nickname, :email, :role, :password, :password_confirmation)
  end

end
