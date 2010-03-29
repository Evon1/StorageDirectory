class Notifier < ActionMailer::Base
  
  def comment_notification(recipient, comment)
    setup_email recipient, comment, 'New website comment'
    @body[:comment] = comment
  end
  
  def setup_email(recipient, comment = nil, subject = '')
    @recipients = recipient
    @from = comment.email
    @subject = subject
    @sent_on = Time.now.utc
  end
  
end
