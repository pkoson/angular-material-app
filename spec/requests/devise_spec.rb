require 'rails_helper'

RSpec.describe "Devise", type: :request do
  describe "GET /v1/auth/sign_in" do
    it "should return status 405" do
      get 'http://api.lvh.me:3000/v1/auth/sign_in'
      expect(response).to have_http_status(405)
    end
  end

  describe "POST /v1/auth/sign_in" do
    before(:each) do
      post 'http://api.lvh.me:3000/v1/auth/sign_in'
      json = JSON.parse(response.body)
    end
      
    context "should return status 401 when send" do 
      it "empty data " do
        expect(response).to have_http_status(401)
      end

      it "incorrect data" do
        params = { "email" => "incorrect@example.com", "password" => "incorrect" }
        post 'http://api.lvh.me:3000/v1/auth/sign_in', params.to_json, { 'CONTENT_TYPE' => 'application/json'}
        expect(response).to have_http_status(401)
      end
    end

    it "should return status 200 when send correct data" do
      user = FactoryGirl.create(:user_is_admin)
      params = { "email" => user.email, "password" => user.password }
      post 'http://api.lvh.me:3000/v1/auth/sign_in', params.to_json, { 'CONTENT_TYPE' => 'application/json'}

      expect(response).to have_http_status(200)
      expect(response.header['uid']).not_to be_empty
      expect(response.header['client']).not_to be_empty
      expect(response.header['access-token']).not_to be_empty
    end
  end

  describe "POST /v1/auth/validate_token" do
    it "should return status 200 and success true when valid token" do
      user = FactoryGirl.create(:user_is_admin)
      params = { "email" => user.email, "password" => user.password }

      post 'http://api.lvh.me:3000/v1/auth/sign_in', params.to_json, { 'CONTENT_TYPE' => 'application/json'}

      get 'http://api.lvh.me:3000/v1/auth/validate_token', nil, { 'CONTENT_TYPE' => 'application/json', 
                                                                  'access-token' => response.header['access-token'], 
                                                                  'client' => response.header['client'], 
                                                                  'uid' => response.header['uid'] 
                                                                }
      json = JSON.parse(response.body)
      expect(json['success']).to be true
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /v1/auth/sign_out" do
    it "should return status 200 and success true when logout successfully" do
      user = FactoryGirl.create(:user_is_admin)
      params = { "email" => user.email, "password" => user.password }
      post 'http://api.lvh.me:3000/v1/auth/sign_in', params.to_json, { 'CONTENT_TYPE' => 'application/json'}
      expect(response).to have_http_status(200)

      delete 'http://api.lvh.me:3000/v1/auth/sign_out', nil, { 'CONTENT_TYPE' => 'application/json', 
                                                                  'access-token' => response.header['access-token'], 
                                                                  'client' => response.header['client'], 
                                                                  'uid' => response.header['uid'] 
                                                                }

      json = JSON.parse(response.body)
      expect(json['success']).to be true
      expect(response).to have_http_status(200)
    end
  end

end
