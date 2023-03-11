class TeamObjective < ApplicationRecord
  belongs_to :roadmap
  has_many :achievements, as: :achievable
end
