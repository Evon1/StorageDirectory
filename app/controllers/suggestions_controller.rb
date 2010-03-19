class SuggestionsController < ApplicationController
  before_filter :get_suggestion, :only => [:show, :edit, :update, :destroy]
  
  def index
    @suggestions = Suggestion.all
  end

  def show
  end

  def new
    @suggestion = Suggestion.new
  end

  def create
    @suggestion = Suggestion.new(params[:suggestion])
    
    if @suggestion.save
      flash[:notice] = @suggestion.title + ' has been created.'
    else
      flash[:error] = model_errors(@suggestion)
    end    
    
    redirect_back_or_default suggestions_path
  end

  def edit
  end

  def update
    if @suggestion.update_attributes(params[:suggestion])
      flash[:notice] = @suggestion.title + ' has been updated.'
    else
      flash[:error] = model_errors(@suggestion)
    end
    
    redirect_back_or_default suggestions_path
  end

  def destroy
    if @suggestion.destroy
      flash[:notice] = @suggestion.title + ' DESTROYED!'
    else
      flash[:error] = 'Error destroying ' + @suggestion.title
    end
    
    redirect_back_or_default suggestions_path
  end
  
  private
  
  def get_suggestion
    @suggestion = Suggestion.find(params[:id])
  end

end
