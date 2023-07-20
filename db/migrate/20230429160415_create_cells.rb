class CreateCells < ActiveRecord::Migration[7.0]
  def change
    create_table :cells do |t|
      t.integer :morpio_id
      t.string :status, default: "Free"

      t.timestamps
    end
  end
end
