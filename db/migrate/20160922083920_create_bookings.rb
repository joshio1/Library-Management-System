class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.belongs_to :room, index:true
      t.belongs_to :user, index:true
      t.datetime :booking_start_time
      t.timestamps
    end
  end
end
