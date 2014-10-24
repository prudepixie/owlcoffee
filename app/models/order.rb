require 'httparty'

class Order < ActiveRecord::Base
	after_create do |order|
		payload = { text: "#{order.name} would like a #{order.order} #{order.coffee}" }.to_json
		HTTParty.post("https://hooks.slack.com/services/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", body: payload)
	end
end
