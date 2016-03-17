class ProductsController < ApplicationController

  def index

    @cla=Cla.find_by(keyword:"product")
    @contents = @cla.contents

  end

  def show

@product=Content.find(params[:id])

  end


end
