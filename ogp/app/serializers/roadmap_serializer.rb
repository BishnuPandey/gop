class RoadmapSerializer < ActiveModel::Serializer
  #include FastJsonapi::ObjectSerializer
  attributes :id, :title, :year, :quarter, :status
  # has_many :personal_objectives
  # has_many :team_objectives
  # has_many :achievements
end
