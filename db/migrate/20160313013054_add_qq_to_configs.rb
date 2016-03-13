class AddQqToConfigs < ActiveRecord::Migration
  def change
    add_column :configs, :qq, :string
  end
end
