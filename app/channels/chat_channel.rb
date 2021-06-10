class ChatChannel < ApplicationCable::Channel
  def subscribed
    @chat = Channel.find_by(id: params[:id])
    stream_for @chat
  end
  def speak(data)
    message = Message.create!(
      body: data['message'],
      author_id: data['author_id'],
      messagable_id: data['channel_id'],
      messagable_type: 'Channel'
    )
    socket = { 
      message: {
        body: data['message'],
        author_id: data['author_id'],
        messagable_id: data['channel_id'],
        messagable_type: 'Channel'
      }}
    ChatChannel.broadcast_to(@chat, socket)
  end
  def unsubscribed; end
end