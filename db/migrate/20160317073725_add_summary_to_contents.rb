class AddSummaryToContents < ActiveRecord::Migration
  def change
    add_column :contents, :summary, :text
  end
end
