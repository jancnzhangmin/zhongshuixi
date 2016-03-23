class AddRecentToConfigs < ActiveRecord::Migration
  def change
    add_column :configs, :recenttitle, :string
    add_column :configs, :recentsummary, :text
  end
end
