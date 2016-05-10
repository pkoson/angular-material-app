# frozen_string_literal: true
module Locale
  extend ActiveSupport::Concern

  included do
    before_action :language
  end

  def language
    I18n.locale = lang_by_params || lang_by_user_settings || lang_by_browser_language
    response.headers['User-Language'] = I18n.locale
  end

  private

  def lang_by_params
    params[:lang] if params[:lang]
  end

  def lang_by_user_settings
    api_v1_user_signed_in? ? current_api_v1_user.language : request.env['HTTP_USER_LANGUAGE']
  end

  def lang_by_browser_language
    request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first if request.env['HTTP_ACCEPT_LANGUAGE']
  end
end
