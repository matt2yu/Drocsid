# json.array! @channels, :id, :name
@channels.each do |channel| 
  json.set! channel.id do 
    json.partial! "api/channels/channels", channel: channel
  end
end