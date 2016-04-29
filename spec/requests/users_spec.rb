# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'Users', type: :request do
  describe 'GET /api/v1/users #index' do
    context 'if request is not authorized' do
      it 'should return status 401 unauthorized' do
        get '/api/v1/users', nil, 'CONTENT_TYPE': 'application/json'
        json = JSON.parse(response.body)
        expect(json).to include('errors')
        expect(response).to have_http_status(401)
      end
    end

    context 'if request is authorized' do
      it 'should return status 200 and users list' do
        user = FactoryGirl.create(:user_is_admin)
        params = { 'email': user.email, 'password': user.password }
        post '/api/v1/auth/sign_in', params.to_json, 'CONTENT_TYPE': 'application/json'

        get '/api/v1/users', nil, request_headers(response)
        json = JSON.parse(response.body)
        expect(json.count).to be > 0
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'POST /api/v1/users #create' do
    before(:each) do
      user = FactoryGirl.create(:user_is_admin)
      params = { 'email': user.email, 'password': user.password }
      post '/api/v1/auth/sign_in', params.to_json, 'CONTENT_TYPE': 'application/json'
    end

    context 'if request can not create user' do
      it 'should return status 422 unprocessable entity' do
        new_user = { 'user': { 'email': '' } }
        post '/api/v1/users', new_user.to_json, request_headers(response)
        expect(response).to have_http_status(422)
      end
    end

    context 'if request create user' do
      it 'should return status 201 created' do
        post '/api/v1/users', new_user_params.to_json, request_headers(response)
        expect(response).to have_http_status(201)
      end
    end
  end

  describe 'GET /api/v1/users/:id #show' do
    context 'if request contain user id' do
      it 'should return status 200' do
        user = FactoryGirl.create(:user_is_admin)
        normal_user = FactoryGirl.create(:user_is_member)
        params = { 'email': user.email, 'password': user.password }
        post '/api/v1/auth/sign_in', params.to_json, 'CONTENT_TYPE': 'application/json'

        get "/api/v1/users/#{normal_user.id}", {}, request_headers(response)
        json = JSON.parse(response.body)
        expect(json.count).to be > 0
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'PATCH /api/v1/users #update' do
    before(:each) do
      user = FactoryGirl.create(:user_is_admin)
      params = { 'email': user.email, 'password': user.password }
      post '/api/v1/auth/sign_in', params.to_json, 'CONTENT_TYPE': 'application/json'
    end

    context 'if request has correct parameters' do
      it 'should return status 200 ok updated' do
        post '/api/v1/users', new_user_params.to_json, request_headers(response)
        json = JSON.parse(response.body)

        update_user = { 'user': { 'role': '2' } }
        patch "/api/v1/users/#{json['id']}", update_user.to_json, request_headers(response)

        json = JSON.parse(response.body)
        expect(json['role']).to eq(2)
        expect(response).to have_http_status(200)
      end
    end

    context 'if request has incorrect parameters' do
      it 'should return status 422 unprocessable entity' do
        post '/api/v1/users', new_user_params.to_json, request_headers(response)
        json = JSON.parse(response.body)

        update_user = { 'user': { 'email': '', 'password': '1234' } }
        patch "/api/v1/users/#{json['id']}", update_user.to_json, request_headers(response)

        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'DELETE /api/v1/users #destroy' do
    before(:each) do
      user = FactoryGirl.create(:user_is_admin)
      params = { 'email': user.email, 'password': user.password }
      post '/api/v1/auth/sign_in', params.to_json, 'CONTENT_TYPE': 'application/json'
    end

    context 'if request destroy user' do
      it 'should return status 204 no_content' do
        post '/api/v1/users', new_user_params.to_json, request_headers(response)
        json = JSON.parse(response.body)

        delete "/api/v1/users/#{json['id']}", nil, request_headers(response)
        expect(response).to have_http_status(204)
      end
    end
  end

  private

  def request_headers(response)
    {
      'CONTENT_TYPE': 'application/json',
      'access-token': response.header['access-token'],
      'client': response.header['client'],
      'uid': response.header['uid']
    }
  end

  def new_user_params
    {
      'user': {
        'name': Faker::Name.name,
        'nickname': Faker::Internet.user_name,
        'email': Faker::Internet.email,
        'role': '4',
        'password': 'password1234',
        'password_confirmation': 'password1234'
      }
    }
  end
end