class CreateAdmins < ActiveRecord::Migration
  def change
    create_table :admins do |t|
      t.string :username
      t.string :login
      t.string :password_digest
      t.integer :status

      t.timestamps null: false
    end
  end
end
