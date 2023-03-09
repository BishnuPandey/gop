class CreateRoadmaps < ActiveRecord::Migration[7.0]
  def change
    create_table :roadmaps do |t|
      t.string :title
      t.integer :year
      t.integer :quarter

      t.timestamps
    end
  end
end
