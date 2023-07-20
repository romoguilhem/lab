class Morpio < ApplicationRecord
  has_many :cells, dependent: :destroy
end
