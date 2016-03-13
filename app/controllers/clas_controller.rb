class ClasController < ApplicationController

  before_action :set_cla, only: [:show, :edit, :update, :destroy]

  # GET /tests
  # GET /tests.json
  def index
    @clas = Cla.all
  end

  # GET /tests/1
  # GET /tests/1.json
  def show
  end

  # GET /tests/new
  def new
    @cla = Cla.new
  end

  # GET /tests/1/edit
  def edit
  end

  # POST /tests
  # POST /tests.json
  def create
    @cla = Cla.new(cla_params)

    respond_to do |format|
      if @cla.save
        format.html { redirect_to clas_path, notice: 'Test was successfully created.' }
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
      if @cla.update(cla_params)
        format.html { redirect_to clas_path, notice: 'Test was successfully updated.' }
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
    @cla.destroy
    respond_to do |format|
      format.html { redirect_to clas_path, notice: 'Test was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_cla
    @cla = Cla.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def cla_params
    params.require(:cla).permit(:title, :keyword)
  end

end
