

export const getChannelMessages = (state, channelId) => {
  const channelMessages = Object.values(state.entities.messages).filter(message => {
    return message.messageableId == channelId
  })
  return channelMessages;
}

export const fetchChannelMessages = channelId => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}/messages`
  })
}

export const createMessage = message => {
  return $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: { message }
  })
}