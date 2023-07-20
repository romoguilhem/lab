class MorpiosController < ApplicationController
  def show
    @morpio = Morpio.find(params[:id])
    @cells = Cell.where(morpio_id: @morpio.id)
  end
end
