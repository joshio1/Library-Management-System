class User < ApplicationRecord
  has_many  :bookings
  has_many :rooms, :through => :bookings
  accepts_nested_attributes_for :bookings
  accepts_nested_attributes_for :rooms
end
