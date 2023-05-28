class DeadlinesController < ApplicationController
    skip_before_action :verify_authenticity_token, only: :create

    def index
        @deadlines = Deadline.all
        render 'deadlines/index'
    end

    def create
        resource = Deadline.new(params.permit(create_params)[:deadline].merge(user_id: current_user.try(:id)))

        if resource.save
            render json: { status: 'Gravação efetuada com sucesso' }
        else
            render json: { status: resource.errors.full_messages }
        end
    end

    def destroy
        @deadline = Deadline.find(params[:id])
        @deadline.destroy
      
        respond_to do |format|
          format.html { redirect_to deadlines_url, notice: 'Prazo excluído com sucesso.' }
          format.json { head :no_content }
        end
    end

    private

    def create_params
        {
            deadline: %i[initial_date final_date user_id deadline_type briefcase_number description]
        }
    end
end
