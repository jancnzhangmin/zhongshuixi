class SlidersController < ApplicationController

  before_action :set_slider, only: [:show, :edit, :update, :destroy]

  # GET /tests
  # GET /tests.json
  def index
    @sliders = Slider.all
    @configs = Config.all
    @config=@configs.first
  end

  # GET /tests/1
  # GET /tests/1.json
  def show
  end

  # GET /tests/new
  def new
    @slider = Slider.new
    @configs = Config.all
    @config=@configs.first
  end

  # GET /tests/1/edit
  def edit
    @configs = Config.all
    @config=@configs.first
  end

  # POST /tests
  # POST /tests.json
  def create
    @slider = Slider.new(slider_params)

    respond_to do |format|
      if @slider.save
        format.html { redirect_to sliders_path, notice: 'Test was successfully created.' }
        format.json { render :show, status: :created, location: @slider }
      else
        format.html { render :new }
        format.json { render json: @slider.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tests/1
  # PATCH/PUT /tests/1.json
  def update
    respond_to do |format|
      if @slider.update(slider_params)
        format.html { redirect_to sliders_path, notice: 'Test was successfully updated.' }
        format.json { render :show, status: :ok, location: @slider }
      else
        format.html { render :edit }
        format.json { render json: @slider.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tests/1
  # DELETE /tests/1.json
  def destroy
    @slider.destroy
    respond_to do |format|
      format.html { redirect_to sliders_url, notice: 'Test was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_slider
    @slider = Slider.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def slider_params
    params.require(:slider).permit(:link, :image)
  end

end
