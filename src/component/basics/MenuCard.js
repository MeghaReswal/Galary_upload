import React from "react";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curEle) => {
            const {id, name, category, image, description} = curEle
            
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      "Maggi noodles are dried noodles fused with oil, and sold
                      with a packet of flavorings. These noodles are usually
                      eaten after being cooked in boiling water for 3 to 5
                      minutes or eaten straight from the packet
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} className="card-media" alt="images" />
                  <span className="card-tag subtle ">Order Now </span>
                </div>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default MenuCard;
