class List < ActiveRecord::Base
  belongs_to :cla
  has_many :contents
end
