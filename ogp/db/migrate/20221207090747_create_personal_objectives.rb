class CreatePersonalObjectives < ActiveRecord::Migration[7.0]
  def change
    create_table :personal_objectives do |t|
      t.belongs_to :roadmap, null: false, foreign_key: true
      t.string :domain
      t.string :title
      t.string :deadline

      t.timestamps
    end
  end
end
