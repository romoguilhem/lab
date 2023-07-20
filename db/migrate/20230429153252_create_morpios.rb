class CreateMorpios < ActiveRecord::Migration[7.0]
  def change
    create_table :morpios do |t|
      t.boolean :ongoing, default: true

      t.timestamps
    end
  end
end
