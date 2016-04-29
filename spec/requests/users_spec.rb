# frozen_string_literal: true
require 'rails_helper'

describe 'Api::V1:UsersController', type: :request do
  let(:admin_user) { FactoryGirl.create(:user_is_admin) }
  let(:admin_params) { { 'email': admin_user.email, 'password': admin_user.password } }
  let(:normal_user) { FactoryGirl.create(:user_is_member) }

  describe '#index' do
    context 'request is not authorized' do
      it 'should return status 401 unauthorized' do
        get '/api/v1/users', nil, 'CONTENT_TYPE': 'application/json'
        expect(JSON.parse(response.body)).to include('errors')
        expect(response).to have_http_status(401)
      end
    end

    context 'request is authorized' do
      it 'should return status 200 and users list' do
        post '/api/v1/auth/sign_in', admin_params.to_json, 'CONTENT_TYPE': 'application/json'
        get '/api/v1/users', nil, request_headers(response)
        expect(JSON.parse(response.body)).not_to be_empty
        expect(response).to have_http_status(200)
      end
    end
  end

  describe '#create' do
    before(:each) do
      post '/api/v1/auth/sign_in', admin_params.to_json, 'CONTENT_TYPE': 'application/json'
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

  describe '#show' do
    context 'if request contain user id' do
      it 'should return status 200' do
        post '/api/v1/auth/sign_in', admin_params.to_json, 'CONTENT_TYPE': 'application/json'
        get "/api/v1/users/#{normal_user.id}", {}, request_headers(response)
        expect(JSON.parse(response.body)['nickname']).to eq(normal_user.nickname.to_s)
        expect(response).to have_http_status(200)
      end
    end
  end

  describe '#update' do
    before(:each) do
      post '/api/v1/auth/sign_in', admin_params.to_json, 'CONTENT_TYPE': 'application/json'
    end

    context 'if request has correct parameters' do
      let(:update_user) { { 'user': { 'role': '2' } } }
      it 'should return status 200 ok updated' do
        post '/api/v1/users', new_user_params.to_json, request_headers(response)
        json = JSON.parse(response.body)
        patch "/api/v1/users/#{json['id']}", update_user.to_json, request_headers(response)
        expect(JSON.parse(response.body)['role']).to eq(2)
        expect(response).to have_http_status(200)
      end
    end

    context 'if request has incorrect parameters' do
      let(:update_user) { { 'user': { 'email': '', 'password': '1234' } } }
      it 'should return status 422 unprocessable entity' do
        post '/api/v1/users', new_user_params.to_json, request_headers(response)
        patch "/api/v1/users/#{JSON.parse(response.body)['id']}", update_user.to_json, request_headers(response)
        expect(response).to have_http_status(422)
      end
    end
  end

  describe '#destroy' do
    before(:each) do
      post '/api/v1/auth/sign_in', admin_params.to_json, 'CONTENT_TYPE': 'application/json'
    end

    context 'if request destroy user' do
      it 'should return status 204 no_content' do
        delete "/api/v1/users/#{normal_user.id}", nil, request_headers(response)
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
        'name': 'Testing name',
        'nickname': 'Testing nickname',
        'email': 'testing@email.test',
        'role': '4',
        'password': 'password1234',
        'password_confirmation': 'password1234'
      }
    }
  end
end
