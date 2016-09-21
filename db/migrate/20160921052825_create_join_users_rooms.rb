class CreateJoinUsersRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :users_rooms do |t|
      t.string :user
      t.string :room
      t.datetime :booking_time
    end
  end
end
