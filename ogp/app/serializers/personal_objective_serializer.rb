class PersonalObjectiveSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :domain, :deadline, :status, :roadmap_id
  has_many :achievements
end
