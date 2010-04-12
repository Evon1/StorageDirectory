module RolesHelper
  
  def roles_select_list_options(roles = [])
    roles.map { |r| "#{r.id}-#{r.title}"}
  end
  
end
