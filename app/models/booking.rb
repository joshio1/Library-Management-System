class Booking < ApplicationRecord
  attr_accessor :user_id, :room_id
  belongs_to :room
  belongs_to :user
end
