class WenhuasController < ApplicationController

  def index



    @cla = Cla.find_by(keyword:"wenhua")
    @news = @cla.contents.order("updated_at DESC")


  end

  def show
    @content = Content.find(params[:id])
    @news = Content.all
  end

end
