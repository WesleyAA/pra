class AddDeadlineTypeToDeadlines < ActiveRecord::Migration[7.0]
  def change
    change_table :deadlines do |t|
      t.string :deadline_type, null: false
    end
  end
end
