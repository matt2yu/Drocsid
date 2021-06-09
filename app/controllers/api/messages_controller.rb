class Api::MessagesController < ApplicationController 

  def index 
    if params[:channel_id]
      @channel = Channel.find_by(id: params[:channel_id])
      @messages = @channel.messages
      render :index
    end

  end
  
  def update 
    @message = Message.find(params[:id])
    if @message 
      if @message.author_id == current_user.id
        if @message.update(message_params)
        else
          render json: @message.errors.full_messages, status: 422
        end
      else 
        render json: ["You do not have permission to do that"], status: 401
      end
    else
      render json: ["The message you are trying to edit does not exist"], status: 401
    end
  end

  def destroy 
    @message = Message.find(params[:id])
    if @message && @message.author_id == current_user.id
      @message.destroy
    else
      render json: ["There was an error"], status: 401
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :messageable_id, :messageable_type)
  end

end