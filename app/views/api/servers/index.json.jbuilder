@servers.each do |server| 
  json.set! server.id do 
    json.partial! "api/servers/servers", server: server
  end
end