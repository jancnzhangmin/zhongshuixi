class SitemapsController < ApplicationController
  def index
    @news = Cla.find_by(keyword:"news").contents
    @products = Cla.find_by(keyword:"product").contents
  end


  def show
    @sitemaps = Content.find(params[:id])
    @products = Content.all


  end
end
