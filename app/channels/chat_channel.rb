class ChatChannel < ApplicationCable::Channel
  def subscribed
    @chat = Channel.find_by(id: params[:id])
    stream_for @chat
  end
  def speak(data)
    message = Message.create(
      body: data['message']['body'],
      author_id: data['message']['authorId'],
      messageable_id: @chat.id,
      messageable_type: @chat
    )
    socket = { message: message.body }
    ChatChannel.broadcast_to(@chat, socket)
  end
  def unsubscribed; end
end