class CreateConfigs < ActiveRecord::Migration
  def change
    create_table :configs do |t|
      t.string :title
      t.string :tel
      t.string :mail
      t.string :address
      t.string :beian

      t.timestamps null: false
    end
  end
end
