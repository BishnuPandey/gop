class Roadmap < ApplicationRecord
  has_many :achievements, as: :achievable
  has_many :team_objectives
  has_many :personal_objectives
end
