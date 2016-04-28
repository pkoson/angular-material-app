# frozen_string_literal: true
class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include CanCan::ControllerAdditions

  before_action :set_locale

  def set_locale
    http_accept_language = request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
    I18n.locale = params[:lang] || request.env['HTTP_USER_LANGUAGE'] || http_accept_language || I18n.locale
  end
end
