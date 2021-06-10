# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')

users = []

demo_user = User.create!(
  email: 'demo@test.com',
  username: 'demouser',
  password: 'password'
)

demo_server = Server.create!(
  name: 'testserver',
  owner_id: demo_user.id
)

demo_server2 = Server.create!(
  name: 'testserver2',
  owner_id: demo_user.id
)

demo_server3 = Server.create!(
  name: 'testserver3',
  owner_id: demo_user.id
)

demo_server4 = Server.create!(
  name: 'testserver4',
  owner_id: demo_user.id
)

demo_server5 = Server.create!(
  name: 'testserver5',
  owner_id: demo_user.id
)

demo_server6 = Server.create!(
  name: 'testserver6',
  owner_id: demo_user.id
)

demo_server7 = Server.create!(
  name: 'testserver7',
  owner_id: demo_user.id
)

demo_channel1 = Channel.create!(
  name: 'testchannel1',
  server_id: demo_server.id
)

demo_channel2 = Channel.create!(
  name: 'testchannel2',
  server_id: demo_server.id
)

demo_channel3 = Channel.create!(
  name: 'testchannel3',
  server_id: demo_server.id
)

demo_channel4 = Channel.create!(
  name: 'testchannel4',
  server_id: demo_server2.id
)

demo_channel5 = Channel.create!(
  name: 'testchannel5',
  server_id: demo_server2.id
)

demo_channel6 = Channel.create!(
  name: 'testchannel6',
  server_id: demo_server2.id
)


message1 = Message.create!(
  body: "Hello everyone. This is the first test message on Drocsid.",
  author_id: demo_user.id
  # messageable_id: demo_channel1.id,
  # messageable_type: 'Channel'
)

# 10 random demo users
# 10.times {
# require 'faker'
#   users << User.create!(
#     email: Faker::Internet.email,
#     username: Faker::FunnyName.name,
#     password: Faker::Number.number(digits: 12)
#   )
# }

