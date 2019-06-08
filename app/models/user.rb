class User < ApplicationRecord
  paginates_per 10

  devise :database_authenticatable, :trackable, :recoverable, :validatable
end
