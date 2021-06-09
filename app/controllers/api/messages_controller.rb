class Api::MessagesController < ApplicationController 
  def index 
    if params[:channel_id]
      @channel = Channel.find_by(id: params[:channel_id])
      @messages = @channel.messages
      render :index
    end
    
  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :messageable_id, :messageable_type)
  end

end