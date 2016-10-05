class BookingsController < ApplicationController
  before_action :set_booking, only: [:show, :edit, :update, :destroy]
  before_filter :authenticate_user!

  # GET /bookings
  # GET /bookings.json
  def index
    @bookings = Booking.all

    respond_to do |format|
      format.html
      format.json { render :json => @bookings }
    end
  end

  # GET /bookings/1
  # GET /bookings/1.json
  def show
  end

  # GET /bookings/new
  def new
    @booking = Booking.new
  end

  # GET /bookings/new
  def new_reservation
    @booking = Booking.new
  end

  # GET /bookings/1/view_history
  def view_history
    @bookings = Booking.where('user_id=?',current_user.id);
    @user = current_user
  end

  #
  def view_current_reservation
    @bookings = Booking.where('(user_id=? AND booking_start_time>=? )',current_user.id, Time.now - 2*60*60);
    @user = current_user
  end

  # GET /bookings/1/edit
  def edit
  end

  # POST /bookings
  # POST /bookings.json
  def create
    @booking = Booking.new(booking_params)
    @current_room_bookings = Booking.where('room_id=?', @booking.room_id);
    overlap = false;
    @current_room_bookings.each do |old_booking|
      endTime = old_booking.booking_start_time + 2*60*60;
      currentEndTime = @booking.booking_start_time + 2*60*60;
      if(@booking.booking_start_time...currentEndTime).overlaps?(old_booking.booking_start_time...endTime)
        respond_to do |format|
          format.html { redirect_to new_booking_path, notice: "Booking for that time slot already exists!" }
          format.json { render json: @booking.errors, status: :unprocessable_entity }
        end
        overlap = true;
        break;
      end
    end
    if(!overlap)
      respond_to do |format|
        if @booking.save
          format.html { redirect_to home_path, notice: 'Booking was successfully created.' }
          format.json { render :show, status: :created, location: @booking}
          UserMailer.welcome_email(@booking).deliver!
        else
          format.html { render :new }
          format.json { render json: @booking.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # PATCH/PUT /bookings/1
  # PATCH/PUT /bookings/1.json
  def update
    respond_to do |format|
      if @booking.update(booking_params)
        format.html { redirect_to @booking, notice: 'Booking was successfully updated.' }
        format.json { render :show, status: :ok, location: @booking }
      else
        format.html { render :edit }
        format.json { render json: @booking.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bookings/1
  # DELETE /bookings/1.json
  def destroy
    @booking.destroy
    respond_to do |format|
      format.html { redirect_to bookings_url, notice: 'Booking was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def booking_params
      params.require(:booking).permit(:user_id, :room_id, :booking_start_time, :email)
    end
end
