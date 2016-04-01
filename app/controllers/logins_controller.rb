class LoginsController < ApplicationController

  def new
@admin=Admin.all
    if @admin.count == 0
      Admin.create(username:'管理员',login:'admin',password:'admin',password_confirmation:'admin',status:'1')
    end
  end

  def create

    admin = Admin.find_by(login:params[:login][:login])
    if admin  && admin.authenticate(params[:login][:password])
      session[:username]=admin.username
      redirect_to admins_path

    else
      flash[:sucess] = "用户名或密码错误"
        redirect_to new_login_path

    end
  end

end
