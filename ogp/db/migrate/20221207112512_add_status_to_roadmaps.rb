class AddStatusToRoadmaps < ActiveRecord::Migration[7.0]
  def change
    add_column :roadmaps, :status, :string
  end
end
