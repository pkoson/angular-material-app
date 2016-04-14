::OmniAuthConfig = Proc.new do
  provider :facebook, ENV['facebook_key'], ENV['facebook_secret']
end