class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :cla_id
      t.string :title
      t.text :content
      t.string :auther

      t.timestamps null: false
    end
  end
end
