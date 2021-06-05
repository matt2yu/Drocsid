# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all

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

10.times {
require 'faker'
  users << User.create!(
    email: Faker::Internet.email,
    username: Faker::FunnyName.two_word_name,
    password: Faker::Number.number(digits: 12)
  )
}