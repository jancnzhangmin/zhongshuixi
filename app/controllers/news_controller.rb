class NewsController < ApplicationController

  def index


    @cla = Cla.find_by(keyword:"news")
    @news = @cla.contents.order("updated_at DESC")




    #@news = Content.all.order("updated_at DESC").paginate :page => params[:page], per_page:8



  end


  def show


    @new=Content.find(params[:id])




  end



  end