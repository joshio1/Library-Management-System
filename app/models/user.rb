class User < ApplicationRecord
  has_many  :bookings, dependent: :destroy
  has_many :rooms, :through => :bookings, dependent: :destroy
  accepts_nested_attributes_for :bookings
  accepts_nested_attributes_for :rooms
  has_secure_password
  enum user_type: { super_admin: 0, member: 1, admin: 2 }

  validates :name,
            presence: true

  validates :email,
            presence: true

  validates :password,
            presence: true, :on => :create, length: {minimum: 6}

  validates_confirmation_of :password

  validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

  validates_uniqueness_of :email

  def isAdmin?
    return role==2 || role==0;
  end

  def isSuperAdmin?
    return role == 0
  end

end
