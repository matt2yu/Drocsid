# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Channel.destroy_all
Server.destroy_all
User.destroy_all
Message.destroy_all


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

demo_message1 = Message.create!(
  body: 'matt2yu: welcome to drocsid everybody!',
  messagable_id: demo_channel1.id,
  messagable_type: 'Channel',
  author_id: demo_user.id
)

demo_message2 = Message.create!(
  body: 'matt2yu: the site is still in the works',
  messagable_id: demo_channel1.id,
  messagable_type: 'Channel',
  author_id: demo_user.id
)

demo_message3 = Message.create!(
  body: 'matt2yu: feel free to look around',
  messagable_id: demo_channel1.id,
  messagable_type: 'Channel',
  author_id: demo_user.id
)

demo_message4 = Message.create!(
  body: "demouser: don't mind me",
  messagable_id: demo_channel1.id,
  messagable_type: 'Channel',
  author_id: demo_user.id
)