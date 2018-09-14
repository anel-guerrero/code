class Api::QuestionsController < ApplicationController
    def index
        @questions = Question.all
    end

    def show 
        @question = Question.includes(:answers).find(params[:id])
    end

    def create
        @question = Question.new(question_params)
        if @question.save
            render 'api/questions/show'
        else
            render json: @question.errors.full_messages, status: 422
        end
    end 

    def update
        @question = Question.find(params[:id])
        if @question.update_attributes(question_params)
            render 'api/questions/show'
        else
            render json: @question.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        render :show
    end 

    private 
    def question_params
        params.require(:question).permit(:title, :body, :user_id)
    end 
end
