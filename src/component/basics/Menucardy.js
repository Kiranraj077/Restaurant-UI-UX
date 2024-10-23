const Menucardy = ({ Menudata = [] }) => {
   
    return (
      <>
      <section className="main-card--container">
        {Menudata.length > 0 ? (
          Menudata.map((curElem) => (
            <div className="card-container" key={curElem.id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">1</span>
                  <span className="card-author subtle">{curElem.category}</span>
                  <h2 className="card-title">{curElem.name}</h2>
                  <span className="card-description subtle">
                    {curElem.description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          ))
        ) : (
          <p>No menu items available</p>
        )}
        </section>
      </>
    );
  };
  
  export default Menucardy;
  