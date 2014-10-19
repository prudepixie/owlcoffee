class AddCoffeeColumn < ActiveRecord::Migration
  def change
    add_column :orders, :coffee, :string
  end
end
