# frozen_string_literal: true
::OmniAuthConfig = proc do
  provider :facebook, ENV['facebook_key'], ENV['facebook_secret']
end
