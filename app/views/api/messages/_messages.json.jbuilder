json.extract! message, :id, :body, :author_id, :messagable_id, :messagable_type, :created_at

author = message.author

json.set! :author_username, author.username