class ChatChannel < ApplicationCable::Channel
  def subscribed 
    chat_type = params[:type]
    @chat = chat_type.constantize.find_by(id: params[:chatId])
    stream_for @chat if @chat
  end

  def speak(data)
    @message = Message.new(
      body: data['message']['body'],
      author_id: data['message']['authorId'],
      messageable_id: @chat.id,
      messageable_type: "Channel"
    )
    if @message.save
      socket = { 
        message: {
          id: @message.id,
          body: @message.body,
          authorId: @message.author_id,
          messageableId: @message.messageable_id,
          messageableType: @message.messageable_type,
          createdAt: @message.created_at,
          author: @message.author
        },
        type: 'receive_message'
      }
      ChatChannel.broadcast_to(@chat, socket)
    end
  end
  def load
    messages = Message.where(messageable_id: @chat.id).limit(5).order(:created_at)
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to(@chat, socket)
  end

  def unsubscribed
  end
end