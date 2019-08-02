# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Video.delete_all

User.create!(
  username: 'hunter12',
  email: 'hunter12@gmail.com',
  password: 'hunter12',
  icon_color: '#42d4f4'
)

User.create!(
  username: 'Demo',
  email: 'demouser@gmail.com',
  password: 'password123!',
  icon_color: '#000000'
)

Video.create!(
  title: "Duck Sauce",
  uploader_id: "1",
  
)