class AddStatusToTeamObjectives < ActiveRecord::Migration[7.0]
  def change
    add_column :team_objectives, :status, :string
  end
end
