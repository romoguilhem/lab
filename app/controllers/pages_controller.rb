class PagesController < ApplicationController
  def home
  end

  def index
    @games = ["Morpio, c'est comme un morpion mais sans le n", "Le Sssssnake", "La bataille corse, mais sans se niquer les mains", "Le démineur niveau facile pcq flemme de faire plus", "Et pleins d'autres quand j'aurai des idées!"]

    @morpio = Morpio.new
    @morpio.save!
    9.times do
      cell = Cell.new
      cell.morpio_id = @morpio.id
      cell.save!
    end
  end
end
