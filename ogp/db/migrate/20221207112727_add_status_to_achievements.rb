class AddStatusToAchievements < ActiveRecord::Migration[7.0]
  def change
    add_column :achievements, :status, :string
  end
end
