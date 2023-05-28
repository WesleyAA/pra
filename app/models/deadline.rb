class Deadline < ApplicationRecord
  self.table_name = :deadlines

  DEADLINE_TYPES = %w[calendar working].freeze

  validates :initial_date, :final_date, :deadline_type, presence: true
  validates :deadline_type, inclusion: { in: ::Deadline::DEADLINE_TYPES }
  
  delegate :email, to: :user, prefix: true, allow_nil: true

  belongs_to :user, inverse_of: :deadlines

  def translated_deadline_type
    deadline_type == 'calendar' ? 'Dias corridos' : 'Dias úteis'
  end

  def formatted_user_email
    return '' if user_email.blank?
  
    user_email.split("@").first
  end

  def formatted_initial_date
    initial_date.strftime('%d/%m/%Y')
  end
  
  def formatted_final_date
    final_date.strftime('%d/%m/%Y')
  end
end