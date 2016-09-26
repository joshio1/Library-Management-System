class User < ApplicationRecord
  has_many  :bookings
  has_many :rooms, :through => :bookings
  accepts_nested_attributes_for :bookings
  accepts_nested_attributes_for :rooms
  has_secure_password

  validates :name,
            presence: true

  validates :email,
            presence: true

  validates :password,
            presence: true, :on => :create, length: {minimum: 6}

  validates_confirmation_of :password

  validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

  validates_uniqueness_of :email

end
