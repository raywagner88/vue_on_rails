class Api::Admin::UsersController < Api::Admin::AdminController
  before_action :load_user, except: [:index, :new, :create, :user]

  def index
    render status: 200, json: { users: User.all }.to_json
  end

  def new
    render status: 200, json: { user: User.new }.to_json
  end

  def edit
    render status: 200, json: { user: @user }.to_json
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render status: 200, json: { user: @user }.to_json
    else
      render json: { success: false, errors: @user.errors.messages }.to_json,
        status: 422
    end
  end

  def update
    if @user.update_attributes(user_params)
      render status: 200, json: { message: 'success' }.to_json
    else
      render json: { success: false, errors: @user.errors.messages }.to_json,
        status: 422
    end
  end

  def destroy
    if @user.destroy
      render status: 200, json: { message: 'success' }.to_json
    else
      render json: { success: false, errors: @user.errors.messages }.to_json,
        status: 422
    end
  end

  def user
    render status: 200, json: { user: current_user }.to_json
  end

  private
    def user_params
      params.require(:user).permit(
        :email,
        :password,
        :password_confirmation
      )
    end

    def load_user
      @user = User.find(params[:id])
    end
end
