class ItemOrder < ApplicationRecord
  belongs_to :cart
  belongs_to :menu_item
end
