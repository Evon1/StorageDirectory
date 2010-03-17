class Notifier < ActionMailer::Base
  
  def comment_notification(comment)
    setup_email 'thelodgeboca@yahoo.com'
    @body[:comment] = comment
  end
  
  def setup_email(recipient)
    @recipients = recipient
    @from = 'noreply@thelodgeboca.com'
    @subject = "Notification, thelodgeboca.com "
    @sent_on = Time.now.utc
  end
  
end
