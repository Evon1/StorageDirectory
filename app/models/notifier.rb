class Notifier < ActionMailer::Base
  
  def comment_notification(recipient, comment, host)
    setup_email recipient, comment.email, 'New website comment'
    @body[:comment] = comment
    @body[:host]    = host
  end
  
  def subscriber_notification(recipient, user, host)
    setup_email recipient, user.email, 'New mailing list subscriber'
    @body[:user] = user
    @body[:host] = host
  end
  
  def setup_email(recipient, from, subject = '')
    @recipients = recipient
    @from = from
    @subject = subject
    @sent_on = Time.now.utc
  end
  
end
