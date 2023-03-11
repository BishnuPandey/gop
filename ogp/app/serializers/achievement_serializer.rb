class AchievementSerializer
  include FastJsonapi::ObjectSerializer
  attributes :remark, :achieved_on, :status, :remarkable_type, :remarkable_id
end
