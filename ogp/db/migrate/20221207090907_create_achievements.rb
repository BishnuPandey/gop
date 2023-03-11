class CreateAchievements < ActiveRecord::Migration[7.0]
  def change
    create_table :achievements do |t|
      t.text :remark
      t.date :achieved_on
      t.references :achievable, polymorphic: true, index: true

      t.timestamps
    end

  end
end
