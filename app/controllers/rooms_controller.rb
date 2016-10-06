class RoomsController < ApplicationController
  before_action :set_room, only: [:show, :edit, :update, :destroy]
  before_filter :authenticate_user!

  # GET /rooms
  # GET /rooms.json
  def index
    @rooms = Room.all

    respond_to do |format|
      format.html
      format.json { render :json => @rooms}
    end

  end

  # # GET /rooms/1
  # # GET /rooms/1.json
  # def show
  # end

  # GET /rooms/new
  def new
    @room = Room.new
  end

  # GET /rooms/1/edit
  def edit
  end


  def search
    @room = Room.new;
  end

  @@stored_rooms

  def custom_update
    # @rooms = Room.all
    #render plain: params['room']['size'];
    # render 'rooms/search_result'
    @rooms = Room.where('(size = ? AND building = ? AND status = ?)', params['room']['size'],params['room']['building'],params['room']['status'])
    @@stored_rooms = @rooms
  end

  def search_result
    @rooms = @@stored_rooms
    respond_to do |format|
    format.json { render :json => @rooms }
    end
  end

  # POST /rooms
  # POST /rooms.json
  def create
    @room = Room.new(room_params)

    respond_to do |format|
      if @room.save
        format.html { redirect_to manage, notice: 'Room was successfully created.' }
        format.json { render :show, status: :created, location: @room }
      else
        format.html { render :new }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /rooms/1
  # PATCH/PUT /rooms/1.json
  def update
    respond_to do |format|
      if @room.update(room_params)
        format.html { redirect_to @room, notice: 'Room was successfully updated.' }
        format.json { render :show, status: :ok, location: @room }
      else
        format.html { render :edit }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rooms/1
  # DELETE /rooms/1.json
  def destroy
    @room.destroy
    respond_to do |format|
      format.html { redirect_to home_path, notice: 'Room was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # GET /rooms/manage
  def manage
    @rooms = Room.all();
    @room = Room.new;
  end

  # GET /rooms/manage
  def view_room_details
    redirect_to(room_path(params[:room]));
  end

  # GET /rooms/get_events
  def get_events
    @rooms = Room.all();
    @rooms.each do |room|
      # @room.bookings.each do |booking|
      #   text += booking.booking_start_time.to_s;
      # end
      # render plain: self.text;
      room.bookings.each do |booking|
        events << {:id => booking.id, :title => "Booked", :start => "#{booking.booking_start_time}",:end => "#{booking_start_time+2}" }
      end
      render :text => events.to_json
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_room
      @room = Room.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def room_params
      params.require(:room).permit(:number, :size, :building, :status)
    end
end
