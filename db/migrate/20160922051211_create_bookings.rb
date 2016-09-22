class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :room_id
      t.datetime :booking_start_time

      t.timestamps
    end
  end
end
