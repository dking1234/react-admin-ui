import "./topBox.scss";
import { topTrips } from "../../data";

const TopBox = () => {
  return (
    <div className="topBox">
<<<<<<< Updated upstream
        <h1>Top Trips</h1>
        <div className="list">
            {topTrips.map(user=>(
                <div className="listItem" key={user.id}>
                    <div className="user">
                        <img src={user.img} alt="" />
                        <div className="userTexts">
                            <span className="username">{user.username}</span>
                            <span className="email">{user.email}</span>
                        </div>
                    </div>
                    <span className="amount">${user.amount}</span>
                </div>
            ))}
        </div>
=======
      <h1>Top Routes</h1>
      <div className="list">
        {topDealUsers.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <div className="userTexts">
                <span className="username">{user.tripRoute}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
>>>>>>> Stashed changes
    </div>
  )
}

export default TopBox