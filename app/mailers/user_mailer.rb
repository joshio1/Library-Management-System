class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def welcome_email(booking)
    @booking = booking
    @url  = 'http://www.gmail.com'
    emails = @booking.email.split(",")
      # Display each value to the console.
      emails.each do |email|
        mail(to: email, subject: 'Library Manager: Room:'+@booking.room.number+' booked!')
    end
  end
end