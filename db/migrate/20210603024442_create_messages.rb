class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.string :author_id, null: false
      t.integer :messagable_id, null: false
      t.integer :messagable_type, null: false

      t.timestamps
    end

    add_index :messages, :author_id
    add_index :messages, :messagable_id   
  end
end
