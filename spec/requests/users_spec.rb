require 'rails_helper'

RSpec.describe "Users", type: :request do

  describe "GET /v1/users #index" do
    it "should return status 401 unauthorized" do
      get 'http://api.lvh.me:3000/v1/users', nil, { 'CONTENT_TYPE' => 'application/json', 
                                                                  'access-token' => '', 
                                                                  'client' => '', 
                                                                  'uid' => '' 
                                                                }
      json = JSON.parse(response.body)
      expect(json).to include('errors')
      expect(response).to have_http_status(401)
    end

    it "should return status 200 and users list" do
      user = FactoryGirl.create(:user_is_admin)
      params = { "email" => user.email, "password" => user.password }

      post 'http://api.lvh.me:3000/v1/auth/sign_in', params.to_json, { 'CONTENT_TYPE' => 'application/json'}

      get 'http://api.lvh.me:3000/v1/users', nil, { 'CONTENT_TYPE' => 'application/json', 
                                                                  'access-token' => response.header['access-token'], 
                                                                  'client' => response.header['client'], 
                                                                  'uid' => response.header['uid'] 
                                                                }
      json = JSON.parse(response.body)
      expect(json['data']).to include('users')
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /v1/users #create" do
    it "should return status 200 and success false not created" do
      user = FactoryGirl.create(:user_is_admin)
      params = { "email" => user.email, "password" => user.password }
      post 'http://api.lvh.me:3000/v1/auth/sign_in', params.to_json, { 'CONTENT_TYPE' => 'application/json'}

      password = Faker::Internet.password(8)
      new_user = { "user": { "name": "", "nickname": "", "email": "", "role": "", "password": "", "password_confirmation": "" } }
      post 'http://api.lvh.me:3000/v1/users', new_user.to_json, { 'CONTENT_TYPE' => 'application/json', 
                                                                  'access-token' => response.header['access-token'], 
                                                                  'client' => response.header['client'], 
                                                                  'uid' => response.header['uid'] 
                                                                }
      json = JSON.parse(response.body)
      expect(json['success']).to be false
      expect(response).to have_http_status(200)
    end

    it "should return status 201 created and success true" do
      user = FactoryGirl.create(:user_is_admin)
      params = { "email" => user.email, "password" => user.password }
      post 'http://api.lvh.me:3000/v1/auth/sign_in', params.to_json, { 'CONTENT_TYPE' => 'application/json'}

      password = Faker::Internet.password(8)
      new_user = { 
        "user": {
            "name": Faker::Name.name, 
            "nickname": Faker::Internet.user_name,
            "email": Faker::Internet.email,
            "role": "4",
            "password": password,
            "password_confirmation": password
        }
      }
      post 'http://api.lvh.me:3000/v1/users', new_user.to_json, { 'CONTENT_TYPE' => 'application/json', 
                                                                  'access-token' => response.header['access-token'], 
                                                                  'client' => response.header['client'], 
                                                                  'uid' => response.header['uid'] 
                                                                }
      json = JSON.parse(response.body)
      expect(json['success']).to be true
      expect(response).to have_http_status(201)
    end
  end

  describe "GET /v1/users/:id #show" do
    it "should return status 200" do
      user = FactoryGirl.create(:user_is_admin)
      normal_user = FactoryGirl.create(:user_is_member)
      params = { "email" => user.email, "password" => user.password }
      post 'http://api.lvh.me:3000/v1/auth/sign_in', params.to_json, { 'CONTENT_TYPE' => 'application/json'}

      get "http://api.lvh.me:3000/v1/users/#{normal_user.id}", {}, { 'CONTENT_TYPE' => 'application/json', 
                                                                  'access-token' => response.header['access-token'], 
                                                                  'client' => response.header['client'], 
                                                                  'uid' => response.header['uid'] 
                                                                }
      json = JSON.parse(response.body)
      expect(json['data']).to include('user')
      expect(json['data']['user']['nickname']).to eq(normal_user.nickname)
      expect(response).to have_http_status(200)
    end
  end
end
