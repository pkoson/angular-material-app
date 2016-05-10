# frozen_string_literal: true
require 'rails_helper'

describe 'Api::V1:Locales', type: :request do
  let(:admin_user) { FactoryGirl.create(:user_is_admin) }
  let(:admin_params) { { 'email': admin_user.email, 'password': admin_user.password } }
  let(:normal_user) { FactoryGirl.create(:user_is_member) }

  describe '#index' do
    context 'user not signed in' do
      it 'change language to cn' do
        get '/api/v1/locales?lang=cn', nil, 'CONTENT_TYPE': 'application/json'
        expect(response.header['user-language']).to eq('cn'.to_sym)
        expect(response).to have_http_status(200)
      end

      it 'change language to en' do
        get '/api/v1/locales?lang=en', nil, 'CONTENT_TYPE': 'application/json'
        expect(response.header['user-language']).to eq('en'.to_sym)
        expect(response).to have_http_status(200)
      end
    end

    context 'user signed in' do
      it 'change language to pl' do
        post '/api/v1/auth/sign_in', admin_params.to_json, 'CONTENT_TYPE': 'application/json'
        get '/api/v1/locales?lang=pl', nil, request_headers(response)
        expect(response.header['user-language']).to eq('pl'.to_sym)
        expect(response).to have_http_status(200)
      end

      it 'change language to cn' do
        post '/api/v1/auth/sign_in', admin_params.to_json, 'CONTENT_TYPE': 'application/json'
        get '/api/v1/locales?lang=cn', nil, request_headers(response)
        expect(response.header['user-language']).to eq('cn'.to_sym)
        expect(response).to have_http_status(200)
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
