class User < ApplicationRecord
  devise :database_authenticatable, :trackable, :recoverable, :validatable
end
