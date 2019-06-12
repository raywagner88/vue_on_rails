class User < ApplicationRecord
  devise :database_authenticatable, :trackable, :recoverable, :validatable

  def as_json(options = {})
    super.merge(created_at: created_at.strftime('%m/%d/%Y'))
  end
end
