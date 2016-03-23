class ContactsController < ApplicationController
  before_action :set_message, only: [:show, :edit, :update, :destroy]
  def index

    @contacts = Cla.find_by(keyword:'contact').contents.last

  end

  def show
  end





  def new
    @contact = Content.new
  end

# GET /tests/1/edit
  def edit
  end

# POST /tests
# POST /tests.json
  def create
    Contact.create(name:params[:name],title:params[:title],content:params[:content],information:params[:information])
    flash[:success] = "谢谢您对公司的关注，我们会尽快处理您的留言!"
    redirect_to contacts_path



  end

  def destroy
    @message.destroy
    respond_to do |format|
      format.html { redirect_to messages_path, notice: 'Test was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
# Use callbacks to share common setup or constraints between actions.
  def set_message
    @message = Contact.find(params[:id])
  end



end
