class NewsController < ApplicationController

  def index


    @cla = Cla.find_by(keyword:"news")
    @news = @cla.contents
    @cla2 = Cla.find_by(keyword:"product")
    @products = @cla2.contents

  end


  def show


    @news=Content.find(params[:id])
    @newss = Content.all
    @cla2 = Cla.find_by(keyword:"product")
    @products = @cla2.contents



  end



  end