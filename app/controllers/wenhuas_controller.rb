class WenhuasController < ApplicationController

  def index

    @cla=Cla.find_by(keyword:'wenhua')
    @content = @cla.contents.last




  end

end
