class ContentsController < ApplicationController

  before_action :set_content, only: [:show, :edit, :update, :destroy]

  # GET /tests
  # GET /tests.json
  def index
    @contents = Content.all.order("updated_at DESC").paginate :page => params[:page], per_page:15

    @clas = Cla.all
  end

  # GET /tests/1
  # GET /tests/1.json
  def show
  end

  # GET /tests/new
  def new
    @content = Content.new
    @clas = Cla.all
  end

  # GET /tests/1/edit
  def edit
    @clas = Cla.all
  end

  # POST /tests
  # POST /tests.json
  def create
    @content = Content.new(content_params)

    respond_to do |format|
      if @content.save
        format.html { redirect_to edit_content_path(@content), notice: 'Test was successfully created.' }
        format.json { render :show, status: :created, location: @content }
      else
        format.html { render :new }
        format.json { render json: @content.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tests/1
  # PATCH/PUT /tests/1.json
  def update
    respond_to do |format|
      if @content.update(content_params)
        format.html { redirect_to contents_path, notice: 'Test was successfully updated.' }
        format.json { render :show, status: :ok, location: @content }
      else
        format.html { render :edit }
        format.json { render json: @test.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tests/1
  # DELETE /tests/1.json
  def destroy
    @content.destroy
    respond_to do |format|
      format.html { redirect_to contents_path, notice: 'Test was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_content
    @content = Content.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def content_params
    params.require(:content).permit(:cla_id, :title,:content,:auther,:image, :price,:summary, :icon)
  end

end
