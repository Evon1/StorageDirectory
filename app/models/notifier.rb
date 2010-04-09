class Notifier < ActionMailer::Base
  
  def comment_notification(recipient, comment, host)
    setup_email recipient, comment, 'New website comment'
    @body[:comment] = comment
    @body[:host]    = host
  end
  
  def setup_email(recipient, comment = nil, subject = '')
    @recipients = recipient
    @from = comment.email
    @subject = subject
    @sent_on = Time.now.utc
  end
  
end
