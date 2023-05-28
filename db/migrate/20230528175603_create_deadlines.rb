class CreateDeadlines < ActiveRecord::Migration[7.0]
  def change
    create_table :deadlines do |t|
      t.date :initial_date, null: false
      t.date :final_date, null: false
      t.string :description
      t.integer :briefcase_number
      t.integer :user_id, foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end
