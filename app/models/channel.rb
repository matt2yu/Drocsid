class Channel < ApplicationRecord
  validates :name, presence: true
  validates :server_id, presence: true

  belongs_to :server
  has_many :channel_users
  has_many :users, through: :channel_users
  has_many :messages, dependent: :destroy
  
end
