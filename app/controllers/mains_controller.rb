class MainsController < ApplicationController

  before_action :set_main, only: [:show, :edit, :update, :destroy]

  # GET /tests
  # GET /tests.json
  def index
    @mains = Main.all
  end

  # GET /tests/1
  # GET /tests/1.json
  def show
  end

  # GET /tests/new
  def new
    @main = Main.new
  end

  # GET /tests/1/edit
  def edit
  end

  # POST /tests
  # POST /tests.json
  def create
    @main = Main.new(main_params)

    respond_to do |format|
      if @main.save
        format.html { redirect_to mains_path, notice: 'Test was successfully created.' }
        format.json { render :show, status: :created, location: @test }
      else
        format.html { render :new }
        format.json { render json: @test.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tests/1
  # PATCH/PUT /tests/1.json
  def update
    respond_to do |format|
      if @main.update(main_params)
        format.html { redirect_to mains_path, notice: 'Test was successfully updated.' }
        format.json { render :show, status: :ok, location: @test }
      else
        format.html { render :edit }
        format.json { render json: @test.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tests/1
  # DELETE /tests/1.json
  def destroy
    @main.destroy
    respond_to do |format|
      format.html { redirect_to mains_path, notice: 'Test was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_main
    @main = Main.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def main_params
    params.require(:main).permit(:title, :summary, :mainimage)
  end

end
