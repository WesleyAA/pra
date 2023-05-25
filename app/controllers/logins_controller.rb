class LoginsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:login_user]

    def index
        render 'login/index'
    end

    def login_user
        username = params.require(:username)
        password = params.require(:password)

        if User.where(username: username, password: password).any?
            redirect_to prazos_index_path, status: :ok, notice: "Login efetuado com sucesso!"
        else
            render json: { error: 'Usuário ou senha inválida' }, status: :unprocessable_entity
        end
    end
end
