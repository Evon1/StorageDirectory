require 'csv'
module Greycsv 
  # adds the import action to a controller that includes Greycsv
  # if params[:mapped] is blank, return the column headers so the user can map them to attributes
  def import
    if params[:mapped].blank?
      @csv    = CSV::Reader.parse(params[:listings][:file])
      @header = @csv.to_a.first.reject(&:nil?).join ','
      
      unless @header.nil?
        flash[:notice] = 'Map the columns'
        redirect_to "#{params[:return_to]}?header_column=#{@header}&csv_tempfile=#{params[controller_name.to_sym][:file].path}"
      else
        flash[:notice] = 'There was a problem reading that file.'
        redirect_to "#{params[:return_to]}?csv_tempfile=#{params[controller_name.to_sym][:file].path}"
      end
    else
      raise [params, File.read(params[:csv_tempfile])].pretty_inspect
    end
  end
  
end