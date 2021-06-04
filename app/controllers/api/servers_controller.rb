class Api::ServersController < ApplicationController

  def index 
    user = User.find(params[:user_id])
    @servers = user.servers
    render '/api/servers/index'
  end
  
  def show
    @server = Server.find(params[:id])
    render 'api/servers/show'
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      render 'api/servers/show'
    end
  end

  def update
    @server = Server.find_by(id: params[:id])
    if @server && @server.update(server_params)
        render '/api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
    if current_user.id == @server.owner_id
      @server.destroy
      render '/api/servers/show'
    end
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end

end