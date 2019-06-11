class Api::Admin::DashboardController < Api::Admin::AdminController
  def index
    metrics = {
      metrics: {
        users: User.all.count
      }
    }

    render json: metrics.to_json
  end
end
