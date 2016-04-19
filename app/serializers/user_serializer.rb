class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :nickname, :email, :role
end
