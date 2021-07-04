class Message < ApplicationRecord
  validates :body, :author_id, :messagable_id, :messagable_type, presence: true
  
  belongs_to :messagable,
    polymorphic: true
    
  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  #1am
end
