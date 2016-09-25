class User < ApplicationRecord
  has_many  :bookings
  has_many :rooms, :through => :bookings
  accepts_nested_attributes_for :bookings
  accepts_nested_attributes_for :rooms

  validates :name,
            presence: true

  validates :email,
            presence: true

  validates :password,
            presence: true

  validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

  validates_uniqueness_of :email

end
