class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :room

  def as_json(options = {})
    {
        :id => self.id,
        :title => "Name:#{self.user.name}",
        :start => self.booking_start_time,
        :end => self.booking_start_time+2*60*60,
        :user_name => self.user_id,
    }
  end


end
