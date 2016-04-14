class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User


  def self.user?
    self.role == 1
  end

  def self.moderator?
    self.role == 4
  end

  def self.admin?
    self.role == 8
  end

end
