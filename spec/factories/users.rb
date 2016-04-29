FactoryGirl.define do
  sequence :email do |n|
    "testing#{n}@email.test"
  end

  factory :user do
    nickname                "TestingNickname"
    email
    password                "FakePassword123"
    password_confirmation   "FakePassword123"

    trait :non_member do
      role 0
    end

    trait :member do
      role 1
    end

    trait :moderator do
      role 4
    end

    trait :admin do
      role 8
    end

    factory :user_is_non_member,  traits: [:non_member]
    factory :user_is_member,      traits: [:member]
    factory :user_is_moderator,   traits: [:moderator]
    factory :user_is_admin,       traits: [:admin]
  end

end