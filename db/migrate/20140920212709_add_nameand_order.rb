class AddNameandOrder < ActiveRecord::Migration
  def change
    add_column :orders, :name, :string
    add_column :orders, :order, :string
  end
end
