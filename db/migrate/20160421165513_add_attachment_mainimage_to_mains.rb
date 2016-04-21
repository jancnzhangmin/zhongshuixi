class AddAttachmentMainimageToMains < ActiveRecord::Migration
  def self.up
    change_table :mains do |t|
      t.attachment :mainimage
    end
  end

  def self.down
    remove_attachment :mains, :mainimage
  end
end
