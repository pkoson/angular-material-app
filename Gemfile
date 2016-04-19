source 'https://rubygems.org'

gem 'rails', '4.2.6'
gem 'rails-api'
gem 'pg'
gem 'puma' # Use puma as the app server
gem 'figaro' # Configuration values often include sensitive information.
gem 'active_model_serializers', git: 'git@github.com:rails-api/active_model_serializers.git'
gem 'devise' 
gem 'devise_token_auth' 
gem 'omniauth'
gem 'omniauth-facebook'
gem 'cancancan', '~> 1.10'
# gem 'rollbar', '~> 2.8.1'
gem 'rack-cors', :require => 'rack/cors'

group :development do
  gem 'pry'
  gem 'capistrano'
  gem 'capistrano-rvm'
  gem 'capistrano-rails'
  gem 'capistrano3-puma'
  gem 'capistrano-bundler'
end

group :development, :test do
  gem 'faker'
  gem 'rspec-rails', '~> 3.0'
  gem 'shoulda-matchers', '~> 3.1'
  gem 'factory_girl_rails', '~> 4.0'
end

# gem 'jbuilder' # To use Jbuilder templates for JSON
# gem 'ruby-debug19', :require => 'ruby-debug' # To use debugger
