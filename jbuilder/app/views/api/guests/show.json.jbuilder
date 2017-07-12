

json.partial! 'api/guests/guest', guest: @guest

json.gifts do
  json.array! @guest.gifts, partial: 'api/gifts/gift', as: :gift
end
