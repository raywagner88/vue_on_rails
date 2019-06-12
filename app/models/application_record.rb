class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def as_json(options = {})
    super.merge(created_at: created_at.strftime('%m/%d/%Y'))
  end
end
