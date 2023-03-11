class AddStatusToPersonalObjectives < ActiveRecord::Migration[7.0]
  def change
    add_column :personal_objectives, :status, :string
  end
end
