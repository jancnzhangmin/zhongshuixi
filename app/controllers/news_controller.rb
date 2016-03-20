class NewsController < ApplicationController

  def index


    @cla = Cla.find_by(keyword:"news")
    @news = @cla.contents
    @cla2=Cla.find_by(keyword:"product")
    @news2 =@cla2.contents
  end



  end