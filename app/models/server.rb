class Server < ApplicationRecord
  validates :name, presence: true, uniqueness: true;

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  ### note: add after memberships is completed ###
  # has_many :members,
  #   through: :memberships,
  #   source: :user

end
