class Achievement < ApplicationRecord
  belongs_to :achievable, polymorphic: true
end
