class User < ApplicationRecord
  before_validation :ensure_session_token

  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true, length: {maximum: 16}
  validates :password, length: {minimum: 6}, allow_nil: true
  validates :password_digest, presence: true 
  validates :session_token, presence: true, uniqueness: true

  has_many :messages,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Message

  attr_reader :password

  def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      user && user.is_password?(password) ? user : nil
  end

  def password=(password)
      self.password_digest = BCrypt::Password.create(password)
      @password = password
  end

  def is_password?(password)
    pw_obj = BCrypt::Password.new(self.password_digest)
    pw_obj.is_password?(password)
  end

  def reset_session_token!
      self.session_token = SecureRandom::urlsafe_base64
      self.save
      self.session_token
  end

  private

  def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64
  end
  
end
