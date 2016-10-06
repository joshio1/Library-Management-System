class Room < ApplicationRecord
  has_many  :bookings, dependent: :destroy
  has_many :users, :through => :bookings, dependent: :destroy
  accepts_nested_attributes_for :bookings
  accepts_nested_attributes_for :users

  validates :number,
            presence: true

  validates :size,
            presence: true

  validates :status,
            presence: true, :on => :create

  validates_uniqueness_of :number

  def as_json(options = {})
    {
        :id => self.id,
        :name => "#{self.number}(#{self.building}, #{self.size})",
        :building => "#{self.building}",
        :size => "#{self.size}"
    }
  end

end
