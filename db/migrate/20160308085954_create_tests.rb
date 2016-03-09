class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.string :name
      t.integer :sex

      t.timestamps null: false
    end
  end
end
