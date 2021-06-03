# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all

users = []

User.create!(
  email: 'demo@test.com',
  username: 'demouser',
  password: 'password'
)

10.times {
  users << User.create!(
    email: Faker::Internet.email,
    username: Faker::FunnyName.two_word_name,
    password: Faker::Number.number(digits: 12)
  )
}