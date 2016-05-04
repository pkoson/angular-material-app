# frozen_string_literal: true
class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  def self.user?
    role == 1
  end

  def self.moderator?
    role == 4
  end

  def self.admin?
    role == 8
  end
end
