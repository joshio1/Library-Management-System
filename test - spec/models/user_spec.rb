require 'rails_helper'

describe User do
  it "has a valid factory" do
    expect(build(:contact)).to be_valid
  end

  it { is_expected.to validate_presence_of :name }
  it { is_expected.to validate_presence_of :email }
  it { is_expected.to validate_uniqueness_of(:email) }

  it "returns a contact's full name as a string" do
    contact = build_stubbed(:user,
                            name: 'Anuraag'

    )
    expect(contact.name).to eq 'Anuraag'
  end


  it "is invalid without a name" do
      contact = User.new(name: nil)
       contact.valid?
       expect(contact.errors[:name]).to include("can't be blank")
     end



end