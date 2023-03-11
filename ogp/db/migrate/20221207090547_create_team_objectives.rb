class CreateTeamObjectives < ActiveRecord::Migration[7.0]
  def change
    create_table :team_objectives do |t|
      t.integer :roadmap_id, null: false, foreign_key: true
      t.string :title
      t.date :deadline

      t.timestamps
    end
  end
end
