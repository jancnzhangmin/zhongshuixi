class AddPriceToContents < ActiveRecord::Migration
  def change
    add_column :contents, :price, :float
  end
end
