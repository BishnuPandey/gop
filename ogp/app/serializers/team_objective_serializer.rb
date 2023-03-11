class TeamObjectiveSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :deadline, :status, :roadmap_id
  has_many :achievements
end
