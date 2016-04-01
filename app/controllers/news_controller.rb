class NewsController < ApplicationController

  def index


    @cla = Cla.find_by(keyword:"news")
    @news = @cla.contents.order("updated_at DESC").paginate :page => params[:page], per_page:8
    @cla2 = Cla.find_by(keyword:"product")
    @products = @cla2.contents



    #@news = Content.all.order("updated_at DESC").paginate :page => params[:page], per_page:8



  end


  def show


    @news=Content.find(params[:id])
    @newss = Content.all
    @cla2 = Cla.find_by(keyword:"product")
    @products = @cla2.contents



  end



  end