# frozen_string_literal: true
# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(email: 'admin@example.com',
            name: 'Admin', password: 'admin1234',
            password_confirmation: 'admin1234',
            role: 8)

(1..30).each_with_index do |index, _user|
  User.create(
    email: "user_#{index}@example.com",
    name: "User_#{index}",
    password: 'user1234',
    password_confirmation: 'user1234',
    role: 1)
end
