class ChangingMessagableType < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :messagable_type
    add_column :messages, :messagable_type, :string
  end
end
