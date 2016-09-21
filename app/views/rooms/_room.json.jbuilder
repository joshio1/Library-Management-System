json.extract! room, :id, :number, :size, :building, :status, :created_at, :updated_at
json.url room_url(room, format: :json)