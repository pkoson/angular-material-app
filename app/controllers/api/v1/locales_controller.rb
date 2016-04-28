# frozen_string_literal: true
class Api::V1::LocalesController < ApplicationController
  def index
    yml = YAML.load_file("config/locales/front.#{I18n.locale}.yml")
    render json: yml["#{I18n.locale}"].to_json
  end
end
